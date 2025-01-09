package bvc

import (
	"ccbmap/generate/data"
	"ccbmap/generate/geocoding"
	"fmt"
	"strconv"
	"strings"
	"time"
)

// Sheet constants
const dateRowId = 0
const headerRowId = 1

// Quanity column constants
const dateRowPrefix = "Case Equiv"
const beerPrefix = "Concord "

//const dateRowSep = "thru"

type columnMapper struct {
	quantity    int
	other       int
	lastUpdated time.Time
}

func newColumnMapper(data *[][]string) columnMapper {
	self := columnMapper{}

	// All other column data in first column
	self.other = 0

	latest := time.Unix(0, 0)
	quanityCol := 0

	for i, cell := range (*data)[dateRowId] {
		if strings.HasPrefix(cell, dateRowPrefix) {
			startDateString := strings.TrimSpace(
				strings.TrimPrefix(
					cell,
					dateRowPrefix),
			)

			startDate, err := time.Parse("2006 01", startDateString)
			if err != nil {
				continue
			}

			// Check that this date is the most recent that is more than a half of a month old
			if startDate.After(latest) && startDate.Before(time.Now().Add(-time.Hour*24*15)) {
				latest = startDate
				quanityCol = i
			}
		}
	}

	if latest == time.Unix(0, 0) {
		panic("Could not find column for latest month. String parsing constants may need to be adjusted.")
	}

	self.lastUpdated = latest
	self.quantity = quanityCol

	return self
}

func (mapper columnMapper) getStore(row *[]string) data.Store {
	nameAndAddress := (*row)[mapper.other]

	store := data.Store{}

	store.Distributor = data.NHD

	fields := strings.Split(nameAndAddress, ",")
	store.Name = strings.TrimSpace(fields[0])

	location := geocoding.Location{}

	location.Address = strings.TrimSpace(fields[1])
	location.City = strings.TrimSpace(fields[len(fields)-2])
	stateAndZip := strings.Split(strings.TrimSpace(fields[len(fields)-1]), " ")
	//state := strings.TrimSpace(stateAndZip[0])
	location.Zipcode = strings.TrimSpace(stateAndZip[1])

	store.Location = location
	store.LastUpdated = mapper.lastUpdated

	return store
}

func (mapper columnMapper) getBeer(row *[]string) data.Beer {
	beerNameRaw := (*row)[mapper.other]
	quantityStr := (*row)[mapper.quantity]

	quantity, err := strconv.ParseFloat(quantityStr, 64)

	if err != nil {
		quantity = 0
	}

	beerName := strings.TrimSpace(
		strings.TrimPrefix(beerNameRaw, beerPrefix),
	)

	beerType, beerName := beerSuffix(&beerName)
	beerName = strings.TrimSpace(beerName)

	return data.Beer{
		RawName:  beerName,
		Quantity: quantity,
		BeerType: beerType,
	}
}

func beerSuffix(beerNameRaw *string) (data.BeerType, string) {
	if strings.HasSuffix(*beerNameRaw, "CN 16oz 4pk") {
		beerName := strings.TrimSuffix(*beerNameRaw, "CN 16oz 4pk")
		return data.Can, beerName
	} else if strings.HasSuffix(*beerNameRaw, "CN 16 4pk") {
		beerName := strings.TrimSuffix(*beerNameRaw, "CN 16 4pk")
		return data.Can, beerName
	} else if strings.HasSuffix(*beerNameRaw, "Mini CN 8oz 4pk") {
		beerName := strings.TrimSuffix(*beerNameRaw, "Mini CN 8oz 4pk")
		return data.MiniCan, beerName
	} else if strings.HasSuffix(*beerNameRaw, "m-CN 8oz 4pk") {
		beerName := strings.TrimSuffix(*beerNameRaw, "Mini CN 8oz 4pk")
		return data.MiniCan, beerName
	} else if strings.HasSuffix(*beerNameRaw, "1/2 BBL") {
		beerName := strings.TrimSuffix(*beerNameRaw, "1/2 BBL")
		return data.Half, beerName
	} else if strings.HasSuffix(*beerNameRaw, "1/6 BBL") {
		beerName := strings.TrimSuffix(*beerNameRaw, "1/6 BBL")
		return data.Sixtel, beerName
	} else if strings.HasSuffix(*beerNameRaw, "1/6 Pin 5.4g") {
		beerName := strings.TrimSuffix(*beerNameRaw, "1/6 Pin 5.4g")
		return data.Sixtel, beerName
	} else if strings.HasSuffix(*beerNameRaw, "Pin 5.4g") {
		beerName := strings.TrimSuffix(*beerNameRaw, "Pin 5.4g")
		return data.Sixtel, beerName
	} else {
		fmt.Println("NAME:", *beerNameRaw)
		panic("Unknown beer type.  Check beer name suffixes")
	}
}

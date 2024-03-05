package nhd

import (
	"ccbmap/generate/data"
	"ccbmap/generate/geocoding"
	"fmt"
	"strconv"
	"strings"
	"time"
)

// Sheet constants
const sheetName = "Sheet0"
const dateRowId = 2
const headerRowId = 3

// Quanity column constants
const dateRowPrefix = "1 Month"
const dateRowSep = "thru"

// Other column constants
const storeNameHeader = "Retail Accounts"
const addressHeader = "Address"
const cityHeader = "City"
const zipcodeHeader = "Zip Code"
const beerNameHeader = "Item Names"

// Parsing constants
var beerPrefixs = []string{"CONCORD CRAFT - ", "CONCORD CRAFT"}

type columnMapper struct {
	quantity    int
	storeName   int
	address     int
	city        int
	zipcode     int
	beerName    int
	lastUpdated time.Time
}

func (mapper columnMapper) getQuantity(row *[]string) string {
	return getIfExists(row, mapper.quantity)
}

func (mapper columnMapper) getStoreName(row *[]string) string {
	return getIfExists(row, mapper.storeName)
}

func (mapper columnMapper) getAddress(row *[]string) string {
	return getIfExists(row, mapper.address)
}

func (mapper columnMapper) getCity(row *[]string) string {
	return getIfExists(row, mapper.city)
}

func (mapper columnMapper) getZipcode(row *[]string) string {
	return getIfExists(row, mapper.zipcode)
}

func (mapper columnMapper) getBeerName(row *[]string) string {
	return getIfExists(row, mapper.beerName)
}

func (mapper columnMapper) getLocation(row *[]string) geocoding.Location {
	return geocoding.Location{
		Address: mapper.getAddress(row),
		City:    mapper.getCity(row),
		Zipcode: mapper.getZipcode(row),
	}
}

func (mapper columnMapper) getStore(row *[]string) data.Store {
	return data.Store{
		Distributor: data.NHD,
		Name:        mapper.getStoreName(row),
		Location:    mapper.getLocation(row),
		LastUpdated: mapper.lastUpdated,
	}
}

func beerTypeAndName(beerNameRaw *string) (data.BeerType, string) {
	if strings.HasSuffix(*beerNameRaw, "6/4PK 16OZ CAN") {
		beerName := strings.TrimSuffix(*beerNameRaw, "6/4PK 16OZ CAN")
		return data.Can, beerName
	} else if strings.HasSuffix(*beerNameRaw, "6/4PK 8OZ CAN") {
		beerName := strings.TrimSuffix(*beerNameRaw, "6/4PK 8OZ CAN")
		return data.MiniCan, beerName
	} else if strings.HasSuffix(*beerNameRaw, "1/6 BBL 5.17G") {
		beerName := strings.TrimSuffix(*beerNameRaw, "1/6 BBL 5.17G")
		return data.Sixtel, beerName
	} else if strings.HasSuffix(*beerNameRaw, "1/2 BBL 15.5G") {
		beerName := strings.TrimSuffix(*beerNameRaw, "1/2 BBL 15.5G")
		return data.Half, beerName
	} else {
		fmt.Println("NAME:", *beerNameRaw)
		panic("Unknown beer type.  Check beer name suffixes")
	}
}

func (mapper columnMapper) getBeer(row *[]string) data.Beer {
	beerNameRaw := mapper.getBeerName(row)
	quantityStr := mapper.getQuantity(row)

	quantity, err := strconv.ParseFloat(quantityStr, 64)

	if err != nil {
		quantity = 0
	}

	beerName := beerNameRaw

	// Remove possible prefixes from the raw beer name and trim any white space
	for _, prefix := range beerPrefixs {
		if strings.HasPrefix(beerNameRaw, prefix) {
			beerName = strings.TrimSpace(
				strings.TrimPrefix(beerNameRaw, prefix),
			)
			break
		}
	}

	beerType, beerName := beerTypeAndName(&beerName)
	beerName = strings.TrimSpace(beerName)

	return data.Beer{
		RawName:  beerName,
		Quantity: quantity,
		BeerType: beerType,
	}
}

func getIfExists(row *[]string, index int) string {
	if len(*row) > index {
		return (*row)[index]
	} else {
		return ""
	}
}

func newColumnMapper(data *[][]string) columnMapper {
	mapper := columnMapper{}

	mapper.getQuanityCol(data)
	mapper.getOtherColumns(data)

	return mapper
}

// Gets the column of the sales report that has the most recent data
func (mapper *columnMapper) getQuanityCol(data *[][]string) {
	latest := time.Unix(0, 0)
	quanityCol := 0

	for i, cell := range (*data)[dateRowId] {
		if strings.HasPrefix(cell, dateRowPrefix) {
			startDateString := strings.TrimSpace(
				strings.TrimPrefix(
					strings.Split(cell, dateRowSep)[0],
					dateRowPrefix),
			)

			startDate, err := time.Parse("1/2/2006", startDateString)

			if err != nil {
				panic("Could not find column for latest month. String parsing constants may need to be adjusted.")
			}

			// Check that this date is the most recent that is more than a half of a month old
			if startDate.After(latest) && startDate.Before(time.Now().Add(-time.Hour*24*15)) {
				latest = startDate
				quanityCol = i
			}

		}
	}

	mapper.lastUpdated = latest
	mapper.quantity = quanityCol
}

func (mapper *columnMapper) getOtherColumns(data *[][]string) {

	// TODO: Handle case where none of these is found?
	for i, cell := range (*data)[headerRowId] {
		if cell == storeNameHeader {
			mapper.storeName = i
		}

		if cell == addressHeader {
			mapper.address = i
		}

		if cell == cityHeader {
			mapper.city = i
		}

		if cell == zipcodeHeader {
			mapper.zipcode = i
		}

		if cell == beerNameHeader {
			mapper.beerName = i
		}
	}
}

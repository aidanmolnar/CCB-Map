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

func (self columnMapper) getQuantity(row *[]string) string {
	return getIfExists(row, self.quantity)
}

func (self columnMapper) getStoreName(row *[]string) string {
	return getIfExists(row, self.storeName)
}

func (self columnMapper) getAddress(row *[]string) string {
	return getIfExists(row, self.address)
}

func (self columnMapper) getCity(row *[]string) string {
	return getIfExists(row, self.city)
}

func (self columnMapper) getZipcode(row *[]string) string {
	return getIfExists(row, self.zipcode)
}

func (self columnMapper) getBeerName(row *[]string) string {
	return getIfExists(row, self.beerName)
}

func (self columnMapper) getLocation(row *[]string) geocoding.Location {
	return geocoding.Location{
		Address: self.getAddress(row),
		City:    self.getCity(row),
		Zipcode: self.getZipcode(row),
	}
}

func (self columnMapper) getStore(row *[]string) data.Store {
	return data.Store{
		Distributor: data.NHD,
		Name:        self.getStoreName(row),
		Location:    self.getLocation(row),
		LastUpdated: self.lastUpdated,
	}
}

func beerTypeAndName(beerNameRaw *string) (data.BeerType, string) {
	if strings.HasPrefix(*beerNameRaw, "6/4PK 16OZ CAN ") {
		beerName := strings.TrimPrefix(*beerNameRaw, "6/4PK 16OZ CAN ")
		return data.Can, beerName
	} else if strings.HasPrefix(*beerNameRaw, "6/4PK 8OZ CAN ") {
		beerName := strings.TrimPrefix(*beerNameRaw, "6/4PK 8OZ CAN ")
		return data.MiniCan, beerName
	} else if strings.HasPrefix(*beerNameRaw, "1/6 BBL 5.17G ") {
		beerName := strings.TrimPrefix(*beerNameRaw, "1/6 BBL 5.17G ")
		return data.Sixtel, beerName
	} else if strings.HasPrefix(*beerNameRaw, "1/2 BBL 15.5G ") {
		beerName := strings.TrimPrefix(*beerNameRaw, "1/2 BBL 15.5G ")
		return data.Half, beerName
	} else {
		fmt.Println("NAME:", *beerNameRaw)
		panic("Unknown beer type.  Check beer name suffixes")
	}
}

func (self columnMapper) getBeer(row *[]string) data.Beer {
	beerNameRaw := self.getBeerName(row)
	quantityStr := self.getQuantity(row)

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
	self := columnMapper{}

	self.getQuanityCol(data)
	self.getOtherColumns(data)

	return self
}

// Gets the column of the sales report that has the most recent data
func (self *columnMapper) getQuanityCol(data *[][]string) {
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

			if startDate.After(latest) {
				latest = startDate
				quanityCol = i
			}

		}
	}

	self.lastUpdated = latest
	self.quantity = quanityCol
}

func (self *columnMapper) getOtherColumns(data *[][]string) {

	// TODO: Handle case where none of these is found?
	for i, cell := range (*data)[headerRowId] {
		if cell == storeNameHeader {
			self.storeName = i
		}

		if cell == addressHeader {
			self.address = i
		}

		if cell == cityHeader {
			self.city = i
		}

		if cell == zipcodeHeader {
			self.zipcode = i
		}

		if cell == beerNameHeader {
			self.beerName = i
		}
	}
}

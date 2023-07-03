package bvc

import (
	"ccbmap/generate/data"

	"github.com/xuri/excelize/v2"
)

func ReadFirstSheet(fileName string) ([][]string, error) {
	f, err := excelize.OpenFile(fileName)

	if err != nil {
		return nil, err
	}

	defer f.Close()

	sheetName := f.GetSheetName(0)

	data, err := f.GetRows(sheetName)
	if err != nil {
		return nil, err
	}

	return data, nil
}

func GetStoresFromSalesSheet(fileName string) []data.Store {
	sheet, err := ReadFirstSheet(fileName)
	if err != nil {
		panic(err)
	}

	mapper := newColumnMapper(&sheet)

	stores := []data.Store{}
	var store data.Store

	// Iterate over all rows in the sheet
	for _, row := range (sheet)[headerRowId+1:] {

		// Check if its a store row
		if row[1] != "" {
			// Add the store if its not empty
			if len(store.Beers) != 0 {
				stores = append(stores, store)
			}
			// Get the next store
			store = mapper.getStore(&row)
		} else {
			store.AddBeer(mapper.getBeer(&row))
		}
	}

	// Add the store if its not empty
	if len(store.Beers) != 0 {
		stores = append(stores, store)
	}

	return stores
}

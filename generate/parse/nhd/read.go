package nhd

import (
	"ccbmap/generate/data"

	"github.com/xuri/excelize/v2"
)

const ignoreValue = "Total"

func readWholeExcelFile(fileName string, sheetName string) ([][]string, error) {
	f, err := excelize.OpenFile(fileName)
	defer f.Close()

	if err != nil {
		return nil, err
	}

	data, err := f.GetRows(sheetName)
	if err != nil {
		return nil, err
	}

	return data, nil
}

func GetStoresFromSalesSheet(fileName string) []data.Store {
	sheet, err := readWholeExcelFile(fileName, sheetName)
	if err != nil {
		panic("Error reading excel file")
	}
	mapper := newColumnMapper(&sheet)

	lastStore := data.Store{}
	currentStore := data.Store{}
	stores := []data.Store{}

	// Iterate over all rows in the sheet
	for _, row := range (sheet)[headerRowId+1:] {
		store := mapper.getStore(&row)

		if store.Location.Address == ignoreValue || store.Location.Address == "" {
			continue
		}

		if store.Location.Address == "" {
			break
		}

		if store.Location == lastStore.Location && store.Name == lastStore.Name {
			currentStore.AddBeer(mapper.getBeer(&row))
		} else {
			if currentStore.Location.Address != ignoreValue && currentStore.Location.Address != "" {
				stores = append(stores, currentStore)
			}

			currentStore = store
			currentStore.Name = mapper.getStoreName(&row)
			// currentStore.location = mapper.getLocation(&row)
		}

		lastStore = store
	}
	if currentStore.Location.Address != ignoreValue && currentStore.Location.Address != "" {
		stores = append(stores, currentStore)
	}

	return stores
}

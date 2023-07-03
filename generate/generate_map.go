package generate

import (
	"ccbmap/generate/cache"
	"ccbmap/generate/data"
	"ccbmap/generate/parse/bvc"
	"ccbmap/generate/parse/nhd"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"

	"fmt"
	"os"
	"regexp"
	"strings"
	"text/template"
)

func GenerateMap() {
	stores := nhd.GetStoresFromSalesSheet("spreadsheet/nhd.xlsx")
	otherStores := bvc.GetStoresFromSalesSheet("spreadsheet/bvc.xlsx")

	stores = append(stores, otherStores...)

	beerNameCache := cache.GetFormattedBeerNames(&stores)
	layers := cache.GetLayerNames(beerNameCache)

	cache.GetGeolocations(&stores)

	writeMap(layers, stores)
}

func writeMap(layerNames []string, stores []data.Store) {
	f, err := os.Create("output/map.js")
	if err != nil {
		panic(err)
	}
	defer f.Close()

	varNames := []string{}
	names := []string{}

	for _, name := range layerNames {
		varNames = append(varNames, "Draft_"+rawToVariable(name))
		names = append(names, "Draft "+name)
	}

	for _, name := range layerNames {
		varNames = append(varNames, "Cans_"+rawToVariable(name))
		names = append(names, "Cans "+name)
	}

	vars := make(map[string]interface{})
	vars["layers"] = names
	vars["layer_vars"] = varNames

	tmpl, _ := template.ParseFiles("templates/template.tmpl")

	tmpl.Execute(f, vars)

	// Add each store to the map
	for i, store := range stores {
		// Skip if geolocation is empty
		if store.GeoLocation.Latitude == 0 {
			continue
		}

		// Skip if store has no product
		if len(store.Beers) == 0 {
			continue
		}

		// Hashset of all beer names
		beerMap := make(map[data.Beer]struct{})

		for _, beer := range store.Beers {
			// Verify that there was sum sold during this period
			if beer.Quantity > 0 {
				beerMap[beer] = struct{}{}
			}
		}

		// Verify that the store has at least some beer
		if len(beerMap) > 0 {
			f.WriteString(
				fmt.Sprintf("marker%d = L.marker([%f, %f])", i, store.GeoLocation.Latitude, store.GeoLocation.Longitude),
			)

			for beer := range beerMap {
				f.WriteString(
					fmt.Sprintf(".addTo(%s)", beerToLayer(beer)),
				)
			}

			f.WriteString(
				fmt.Sprintf(".bindPopup(\"%s<br>%s<br>", TitleCase(store.Name), store.Location.ToFullAddress()),
			)

			usedBeerNames := []string{}

			for _, beer := range store.Beers {
				// Verify that there was sum sold during this period
				if beer.Quantity > 0 && !Contains(usedBeerNames, beer.PrettyName) {
					if len(usedBeerNames) > 0 {
						f.WriteString(", ")
					}
					f.WriteString(beer.PrettyName + " " + beer.BeerType)
					usedBeerNames = append(usedBeerNames, beer.PrettyName)
				}
			}

			f.WriteString("<br>Last Updated " + store.LastUpdated.Format("01-2006"))

			f.WriteString("\");\n")
		}

	}
}

func beerToLayer(beer data.Beer) string {
	if beer.BeerType == data.Can || beer.BeerType == data.MiniCan {
		return "Cans_" + rawToVariable(beer.LayerName)
	} else {
		return "Draft_" + rawToVariable(beer.LayerName)
	}
}

func rawToVariable(name string) string {
	name = strings.ReplaceAll(name, " ", "")

	reg, err := regexp.Compile("[^a-zA-Z0-9]+")
	if err != nil {
		panic(err)
	}
	return reg.ReplaceAllString(name, "")
}

// Checks if an array of strings contains a specific string
func Contains(s []string, str string) bool {
	for _, v := range s {
		if v == str {
			return true
		}
	}

	return false
}

func TitleCase(input string) string {
	caser := cases.Title(language.AmericanEnglish)
	return caser.String(input)
}

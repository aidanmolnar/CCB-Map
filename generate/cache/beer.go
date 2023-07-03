package cache

import "ccbmap/generate/data"

const defaultLayerName = "Other"

// The display name on map of a beer and the map layer to add it to
type FormattedBeerNames struct {
	PrettyName string
	LayerName  string
}

func (name FormattedBeerNames) Serialize() []interface{} {
	return []interface{}{name.PrettyName, name.LayerName}
}

func (name *FormattedBeerNames) Deserialize(vals []string) {
	name.PrettyName = vals[0]
	name.LayerName = vals[1]
}

// Wrapper around an unformatted name from a sales report
type RawBeerName struct {
	RawName string
}

func (beer RawBeerName) ToKeyString() string {
	return beer.RawName
}

func (beer RawBeerName) ToEntry() *FormattedBeerNames {
	return &FormattedBeerNames{
		PrettyName: beer.RawName,
		LayerName:  "Other",
	}
}

func GetFormattedBeerNames(stores *[]data.Store) Cache[RawBeerName, *FormattedBeerNames] {

	cache, err := LoadCache[RawBeerName, FormattedBeerNames]("caches/beer-names.xlsx", "Sheet1")
	defer cache.SaveAndClose()

	// Verify cache loaded correctly
	if err != nil {
		panic(err)
	}

	// Get all beer names from cache
	for i, store := range *stores {
		for j, beer := range store.Beers {

			name := cache.Get(RawBeerName{RawName: beer.RawName})

			(*stores)[i].Beers[j].PrettyName = name.PrettyName
			(*stores)[i].Beers[j].LayerName = name.LayerName
		}
	}

	return cache
}

func GetLayerNames(cache Cache[RawBeerName, *FormattedBeerNames]) []string {
	layers := []string{}

	for _, name := range cache.Lookup {
		if !Contains(layers, name.LayerName) {
			layers = append(layers, name.LayerName)
		}
	}

	return layers
}

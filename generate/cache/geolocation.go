package cache

import (
	"ccbmap/generate/data"
	"ccbmap/generate/geocoding"
	"strconv"
)

// The display name on map of a beer and the map layer to add it to
type GeoLocationEntry struct {
	Latitude  float64
	Longitude float64
	Error     error
}

func (entry GeoLocationEntry) Serialize() []interface{} {

	if entry.Error != nil {
		return []interface{}{entry.Latitude, entry.Longitude, entry.Error.Error()}
	} else {
		return []interface{}{entry.Latitude, entry.Longitude}
	}

}

func (entry *GeoLocationEntry) Deserialize(vals []string) {

	var err error
	entry.Latitude, err = strconv.ParseFloat(vals[0], 64)
	if err != nil {
		panic("Failed to parse cached geolocation float")
	}
	entry.Longitude, err = strconv.ParseFloat(vals[1], 64)
	if err != nil {
		panic("Failed to parse cached geolocation float")
	}
}

// Wrapper around an unformatted name from a sales report
type LocationKey struct {
	Location geocoding.Location
}

func (location LocationKey) ToKeyString() string {
	return location.Location.ToFullAddress()
}

func (location LocationKey) ToEntry() *GeoLocationEntry {
	geolocation, err := geocoding.GetGeoLocation(location.Location)
	return &GeoLocationEntry{
		Latitude:  geolocation.Latitude,
		Longitude: geolocation.Longitude,
		Error:     err,
	}
}

const geolocationSheet = "Sheet1"

func GetGeolocations(stores *[]data.Store) {
	locationCache, err := LoadCache[LocationKey, GeoLocationEntry]("caches/geolocations.xlsx", "Sheet1")
	defer locationCache.SaveAndClose()

	// Verify cache loaded correctly
	if err != nil {
		panic(err)
	}

	// Get all beer names from cache
	for i, store := range *stores {
		geolocation := locationCache.Get(LocationKey{Location: store.Location})
		(*stores)[i].GeoLocation = geocoding.GeoLocation{Latitude: geolocation.Latitude, Longitude: geolocation.Longitude}
	}

}

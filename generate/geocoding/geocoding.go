package geocoding

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

type Location struct {
	Address string
	City    string
	Zipcode string
}

type GeoLocation struct {
	Latitude  float64
	Longitude float64
}

// Converts a location to a geolocation
func GetGeoLocation(location Location) (GeoLocation, error) {
	resp, err := http.Get(location.toGoogleQuery())

	if err != nil {
		return GeoLocation{}, err
	}

	bytes, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		return GeoLocation{}, err
	}

	return GoogleMapsJsonToGeoLocation(bytes, location.Zipcode)
}

// Converts a location to a googlemaps geocoding query url
func (self Location) toGoogleQuery() string {
	// Remove extraneous address information
	address, _, _ := strings.Cut(self.Address, "&")

	return fmt.Sprintf("%saddress=%s&key=%s",
		"https://maps.googleapis.com/maps/api/geocode/json?",
		strings.Replace(
			strings.Title(strings.ToLower(address))+","+strings.Title(strings.ToLower(self.City))+"+NH"+",USA",
			" ", "+", -1),
		ApiKey)
}

func (self Location) ToFullAddress() string {
	return strings.Title(strings.ToLower(self.Address)) +
		"," + strings.Title(strings.ToLower(self.City)) +
		"," + self.Zipcode
}

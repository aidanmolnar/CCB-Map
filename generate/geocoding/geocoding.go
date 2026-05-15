package geocoding

import (
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
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

// Ensure key is not returned in error
func scrubError(err error) error {
	if err == nil {
		return nil
	}

	oldStr := err.Error()
	newStr := strings.ReplaceAll(oldStr, ApiKey, "API_KEY")

	return errors.New(newStr)
}

// Converts a location to a geolocation
func GetGeoLocation(location Location) (GeoLocation, error) {
	resp, err := http.Get(location.toGoogleQuery())
	err = scrubError(err)

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
	address, _, _ = strings.Cut(address, "#")

	fullAddress := strings.Title(strings.ToLower(address)) + "," + strings.Title(strings.ToLower(self.City)) + "+NH" + ",USA"

	encodedFullAddress := url.QueryEscape(fullAddress)

	return fmt.Sprintf("%saddress=%s&key=%s",
		"https://maps.googleapis.com/maps/api/geocode/json?",
		encodedFullAddress,
		ApiKey)
}

// TODO: Is this used elsewhere?
func (self Location) ToFullAddress() string {
	return strings.Title(strings.ToLower(self.Address)) +
		"," + strings.Title(strings.ToLower(self.City)) +
		"," + self.Zipcode
}

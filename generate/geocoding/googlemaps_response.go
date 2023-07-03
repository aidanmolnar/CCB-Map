package geocoding

import (
	"encoding/json"
	"fmt"
)

const goodRequestStatus = "OK"

// Structure of a googlemaps json response to a geocoding api request
type GoogleMapsResponse struct {
	Results []struct {
		AddressComponents []struct {
			LongName  string   `json:"long_name"`
			ShortName string   `json:"short_name"`
			Types     []string `json:"types"`
		} `json:"address_components"`
		FormattedAddress string `json:"formatted_address"`
		Geometry         struct {
			Bounds struct {
				Northeast struct {
					Lat float64 `json:"lat"`
					Lng float64 `json:"lng"`
				} `json:"northeast"`
				Southwest struct {
					Lat float64 `json:"lat"`
					Lng float64 `json:"lng"`
				} `json:"southwest"`
			} `json:"bounds"`
			Location struct {
				Lat float64 `json:"lat"`
				Lng float64 `json:"lng"`
			} `json:"location"`
			LocationType string `json:"location_type"`
			Viewport     struct {
				Northeast struct {
					Lat float64 `json:"lat"`
					Lng float64 `json:"lng"`
				} `json:"northeast"`
				Southwest struct {
					Lat float64 `json:"lat"`
					Lng float64 `json:"lng"`
				} `json:"southwest"`
			} `json:"viewport"`
		} `json:"geometry"`
		PlaceID string   `json:"place_id"`
		Types   []string `json:"types"`
	} `json:"results"`
	Status       string `json:"status"`
	ErrorMessage string `json:"error_message"`
}

func (response GoogleMapsResponse) GetGeolocation(zipcode string) (GeoLocation, error) {
	if response.Status != goodRequestStatus {
		panic(fmt.Errorf("request was denied: %s", response.ErrorMessage))
	}

	geos := []GeoLocation{}
	for _, result := range response.Results {
		for _, comp := range result.AddressComponents {
			for _, ty := range comp.Types {
				if ty == "postal_code" && comp.ShortName == zipcode {
					geos = append(geos, GeoLocation{
						Latitude:  result.Geometry.Location.Lat,
						Longitude: result.Geometry.Location.Lng,
					})
				}
			}
		}
	}

	if len(geos) == 1 {
		return geos[0], nil
	} else if len(geos) > 1 {
		return geos[0], fmt.Errorf("found multiple locations in specified zipcode")
	}

	if len(response.Results) == 1 {
		return GeoLocation{
			Latitude:  response.Results[0].Geometry.Location.Lat,
			Longitude: response.Results[0].Geometry.Location.Lng,
		}, fmt.Errorf("could not find result with specified zipcode, but found exactly one result")
	}

	return GeoLocation{}, fmt.Errorf("could not find result with specified zipcode. Found %d other results", len(response.Results))
}

func GoogleMapsJsonToGeoLocation(bytes []byte, zipcode string) (GeoLocation, error) {
	response := GoogleMapsResponse{}
	err := json.Unmarshal(bytes, &response)
	if err != nil {
		return GeoLocation{}, err
	}

	return response.GetGeolocation(zipcode)
}

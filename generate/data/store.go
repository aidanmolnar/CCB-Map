package data

import (
	"ccbmap/generate/geocoding"
	"time"
)

type Store struct {
	Name        string
	Distributor string
	Location    geocoding.Location
	GeoLocation geocoding.GeoLocation
	LastUpdated time.Time
	Beers       []Beer
}

func (self *Store) AddBeer(beer Beer) {

	self.Beers = append(self.Beers, beer)
}

type Distributor = string

const (
	NHD Distributor = "NHD"
	BBC             = "BBC"
)

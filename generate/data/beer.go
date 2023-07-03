package data

type Beer struct {
	RawName    string
	PrettyName string
	LayerName  string
	Quantity   float64
	BeerType   BeerType
}

type BeerType = string

const (
	Can     BeerType = "Can"
	MiniCan          = "MiniCans"
	Sixtel           = "Draft"
	Half             = "Draft"
)

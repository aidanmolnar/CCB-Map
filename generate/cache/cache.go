package cache

import (
	"fmt"

	"github.com/xuri/excelize/v2"
)

// ASCII value of "A"
const startingASCIINumber = 65

type CacheEntry interface {
	Serialize() []interface{}
	Deserialize([]string)
}

type CacheKey[T CacheEntry] interface {
	ToKeyString() string
	ToEntry() T
}

// Maps a key to a value
// Stores on disk in excel file and in memory
type Cache[K CacheKey[T], T CacheEntry] struct {
	file       *excelize.File
	sheet      string
	Lookup     map[string]T
	numEntries int
}

// Loads the cache from file
func LoadCache[K CacheKey[T], U any, T interface { // go wtf
	*U
	CacheEntry
}](fileName string, sheetName string) (Cache[K, T], error) {
	f, err := excelize.OpenFile(fileName)
	if err != nil {
		return Cache[K, T]{}, err
	}

	data, err := f.GetRows(sheetName)
	if err != nil {
		return Cache[K, T]{}, err
	}

	lookup := make(map[string]T)

	// Add all rows of cache to lookup table
	for _, row := range data {
		entry := T(new(U))
		entry.Deserialize(row[1:])
		lookup[row[0]] = entry
	}

	return Cache[K, T]{
			file:       f,
			sheet:      sheetName,
			Lookup:     lookup,
			numEntries: len(data),
		},
		nil
}

// Adds a entry to the lookup table and the excel file storage
func (cache *Cache[K, T]) Get(key K) T {

	keyStr := key.ToKeyString()

	if entry, ok := cache.Lookup[keyStr]; ok {
		return entry
	} else {
		entry := key.ToEntry()

		// Add entry to lookup
		cache.Lookup[keyStr] = entry

		// Add key to file
		cache.file.SetCellValue(cache.sheet, "A"+fmt.Sprint(cache.numEntries+1), key.ToKeyString())

		// Add entry data to file
		vals := entry.Serialize()
		if len(vals) > 20 {
			panic("Too many strings to store")
		}
		for i := 0; i < len(vals); i++ {
			col := string(rune(startingASCIINumber + 1 + i))
			cache.file.SetCellValue(cache.sheet, col+fmt.Sprint(cache.numEntries+1), vals[i])
		}

		cache.numEntries += 1

		return entry
	}
}

// Saves changes to cache on disk
func (cache Cache[K, T]) SaveAndClose() {
	cache.file.Save()
	cache.file.Close()
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

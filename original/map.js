
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var baseLayers = {
    'OpenStreetMap': osm,
};

var cities = L.layerGroup();
var hmm = L.layerGroup();

var map = L.map('map', {
    center: [43.8, -71.5724],
    zoom: 8,
    layers: [osm, cities, hmm]
});

var overlays = {
    'Cities': cities,
    'hmm': hmm,
};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

map.on("overlayremove", function(o) {
    if (map.hasLayer(cities)) {
      map.removeLayer(cities);
      map.addLayer(cities);
    }
          
    if (map.hasLayer(hmm)) {
      map.removeLayer(hmm);
      map.addLayer(hmm);
    }  
});

var marker1 = L.marker([43.6, -71.5724]).addTo(cities);
var marker2 = L.marker([43.8, -71.5724]).addTo(hmm);
var marker3 = L.marker([44.0, -71.5724]).addTo(cities).addTo(hmm);
var marker4 = L.marker([44.0, -71]).addTo(hmm).addTo(cities);
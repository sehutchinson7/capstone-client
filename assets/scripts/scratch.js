$(document).ready(function () {
  // `map` is an element, which is the same as the empty div in the html
  // `L` is the leaflet library that lets you do things
  const map = L.map('map', {
    center: [42.35, -71.08], // [lat,lon]
    zoom: 13
  })

  L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
    {
      attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
      maxZoom: 17,
      minZoom: 9
    }).addTo(map)
})
})
$(document).ready(function () {
    // map element, which is the same as the div in the html
    const map = L.map('map', { // L is the leaflet library that lets you do things
      center: [51.505, -0.09], // lat, lon
      zoom: 13
    })

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
    }).addTo(map)

const marker = L.marker([35.59, -82.56]).addTo(map)
})
})

add geoJSON layer to the map
  L.geoJSON(data).addTo(map)
})

const geojsonMarkerOptions = {
  radius: 8,
  fillColor: '#ff7800',
  color: '#ff7800',
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
}
L.geoJson(bostonRobberies, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions)
  }
}).addTo(map)
Adds current location using html5
$('#get-location').click(function (event) {
  addCurrentLocationToMap()
  $('#location-message').removeClass('hidden')
  setTimeout(() => $('#location-message').html(''), 3000)
})
Make the map clickable
const popup = L.popup()
function onMapClick (event) {
  popup
    .setLatLng(event.latlng)
    .setContent('Location: ' + event.latlng)
    .openOn(map)
}
map.on('click', onMapClick)
import neighborhood data polygons as GeoJSON file
file was converted in QGIS
$.getJSON(bostonNeighborhoods, function (data) {
add geoJSON layer to the map
  L.geoJson(data).addTo(map)
})

import robbery point data as GeoJSON file
file was converted in QGIS

const L = require('leaflet')
const projectApi = require('./events')

// const leafletMap = require('leaflet-map')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  projectApi.addHandlers()
})

'use strict'

const L = require('leaflet')
// const leafletMap = require('leaflet-map')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $(document).ready(function () {
    // `map` is an element, which is the same as the empty div in the html
    // `L` is the leaflet library that lets you do thing
    const map = L.map('map').setView([42.35, -71.08], 13) // lat, lon, zoom

    L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
      {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        maxZoom: 17,
        minZoom: 9
      }).addTo(map)
  })
})

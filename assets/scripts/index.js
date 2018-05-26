'use strict'

const L = require('leaflet')
// const leafletMap = require('leaflet-map')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $(document).ready(function () {
    const addCurrentLocationToMap = function () {
      // if browser supports geolocation, get the position
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude
          const long = position.coords.longitude
          console.log('--- Your Position: ---')
          console.log('Lat: ' + position.coords.latitude)
          console.log('Long: ' + position.coords.longitude)
          console.log('-----------------------')

          // let marker = L.marker([position.coords.latitude, position.coords.longitude].addTo(map)
          // add marker to the map
          const marker = L.marker([lat, long]).addTo(map);
          // add a pop up to tell the user their approximate location
          marker.bindPopup('Hi Sara, you are somewhere close to this location').openPopup()
        })
      // if geolocation is not supported
      } else {
        console.log('Geolocation not enabled or supported')
      }
    }
    // `map` is an element, which is the same as the empty div in the html
    // `L` is the leaflet library that lets you do thing
    const map = L.map('map').setView([42.35, -71.08], 13) // lat, lon, zoom

    L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png', {
      attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
      maxZoom: 17,
      minZoom: 9
    }).addTo(map)

    // Adds current location using html5
    $('#get-location').click(function (event) {
      addCurrentLocationToMap()
    })
  })
})

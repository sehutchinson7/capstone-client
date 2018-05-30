'use strict'

const L = require('leaflet')
const authEvents = require('./auth/events')
const incidentEvents = require('./incident/events')
// const leafletMap = require('leaflet-map')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  incidentEvents.addHandlers()
})

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
          const marker = L.marker([lat, long]).addTo(map)
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
    // use https to prevent bug that was asking user to "load unsafe scripts"
    L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
      {
        attribution: 'Tiles by <a href="https://mapc.org">MAPC</a>, Data by <a href="https://mass.gov/mgis">MassGIS</a>',
        maxZoom: 17,
        minZoom: 9
      }).addTo(map)

    // import neighborhood data polygons as GeoJSON file
    // file was converted in QGIS
    $.getJSON('boston_neighborhoods.geojson', function (data) {
    // add geoJSON layer to the map
      L.geoJson(data).addTo(map)
    })

    // import robbery point data as GeoJSON file
    // file was converted in QGIS
    $.getJSON('boston_robberies_clean.geojson', function (data) {
      // add geoJSON layer to the map
      L.geoJSON(data).addTo(map)
    })
    // Adds current location using html5
    $('#get-location').click(function (event) {
      addCurrentLocationToMap()
      $('#location-message').removeClass('hidden')
      setTimeout(() => $('#location-message').html(''), 3000)
    })
    // Make the map clickable
    const popup = L.popup()
    function onMapClick (event) {
      popup
        .setLatLng(event.latlng)
        .setContent('Location: ' + event.latlng)
        .openOn(map)
    }
    map.on('click', onMapClick)
  })
})

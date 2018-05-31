'use strict'

const L = require('leaflet')
const authEvents = require('./auth/events')
const incidentEvents = require('./incident/events')
const bostonNeighborhoods = 'public/boston_neighborhoods.geojson'
const bostonRobberies = 'public/boston_robberies_clean.geojson'
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
          const yodaIcon = L.icon({
            iconUrl: 'yoda.png',
            iconSize: [50, 40]
          })
          const yodaMarker = L.marker([lat, long], {icon: yodaIcon}).addTo(map)
          // add a pop up to tell the user their approximate location
          yodaMarker.bindPopup('Somewhere close to this location, you are. Click me to zoom to your location. Click the map to find coordinates.').openPopup()
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

    $('#get-location').click(function (event) {
      addCurrentLocationToMap()
      $('#location-message').removeClass('hidden')
      setTimeout(() => $('#location-message').html(''), 3000)
    })
    const popup = L.popup()
    function onMapClick (event) {
      popup
        .setLatLng(event.latlng)
        .setContent('Location: ' + event.latlng)
        .openOn(map)
    }
    map.on('click', onMapClick)

    const geojsonMarkerOptions = {
      fillColor: '#ff0000',
      color: '#000000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }

    $.getJSON(bostonRobberies, function (data) {
      L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
          const circle = L.circle(latlng, geojsonMarkerOptions).addTo(map)
          circle.bindPopup('Incident Information:' + '<br/>' + feature.properties.Location + '<br/>' + feature.properties.STREET + '<br/>' + feature.properties.OFFENSE_DESCRIPTION + '<br/>' + feature.properties.OCCURRED_ON_DATE)
          return circle
        }
      })
    }).addTo(map)
  })
})

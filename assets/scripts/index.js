'use strict'

const L = require('leaflet')
//const leafletMap = require('leaflet-map')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const map = L.map('map').setView([42.35, -71.08], 13)

  L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
    {
      attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
      maxZoom: 17,
      minZoom: 9
    }).addTo(map)
})
// Initialize the map
//   const mymap = leafletMap()// L.map('#mapid').setView([51.505, -0.09], 13)
//   L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
//     {
//       attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
//       maxZoom: 17,
//       minZoom: 9
//     }).addTo(mymap)
// })
// L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i86knfo3/{z}/{x}/{y}.png')
//   .addTo(mymap)
//
// L.marker([0,0])
//   .bindPopup('Null Island!')
//   .addTo(mymap)

//
//   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1Ijoic2h1dGNoaW5zb243IiwiYSI6ImNqaG1jd21iYzNlMDQzNm5tbnJxbnlxNjgifQ.FNxvVfSXX7byUIDqSYQzFQ}',
//
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       maxZoom: 18,
//       id: 'mapbox.streets',
//       accessToken: 'pk.eyJ1Ijoic2h1dGNoaW5zb243IiwiYSI6ImNqaG1jd21iYzNlMDQzNm5tbnJxbnlxNjgifQ.FNxvVfSXX7byUIDqSYQzFQ'
//     }).addTo(mymap)
// })]

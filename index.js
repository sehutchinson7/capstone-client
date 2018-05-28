'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

// data layers
require('./boston_neighborhoods.geojson')
require('./boston_robberies_clean.geojson')

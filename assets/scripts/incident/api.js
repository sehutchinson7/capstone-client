'use strict'

const config = require('../config')
const store = require('../store')

const createIncident = function (data) {
  return $.ajax({
    url: config.apiUrl + '/incidents',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const indexIncident = function (data) {
  return $.ajax({
    url: config.apiUrl + '/incidents',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const showIncident = function (data) {
  return $.ajax({
    url: config.apiUrl + '/incidents' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteIncident = function (data) {
  return $.ajax({
    url: config.apiUrl + '/incidents/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateIncident = function (data) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + data.incident.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  createIncident,
  indexIncident,
  showIncident,
  updateIncident,
  deleteIncident
}

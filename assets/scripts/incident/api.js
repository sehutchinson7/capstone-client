'use strict'

const config = require('../config')
const store = require('../store')

const createIncident = function (data) {
  console.log('in the api request data is:', data)
  return $.ajax({
    url: config.apiUrl + '/incidents',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const getUserIncidents = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllIncidents = function () {
  return $.ajax({
    url: config.apiUrl + `/incidents`,
    method: 'GET',
    headers: {
      contentType: 'application/json',
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
  console.log('upade data is', data)
  return $.ajax({
    url: config.apiUrl + '/incidents/' + data.incident.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  createIncident,
  getUserIncidents,
  getAllIncidents,
  updateIncident,
  deleteIncident
}

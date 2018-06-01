'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onCreateIncident = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createIncident(data)
    .then(ui.createIncidentSuccess)
    .then(onClearList())
    .catch(ui.createIncidentFailure)
  // console.log('working')
}
//
// const onIndexIncident = function () {
//   event.preventDefault()
//   api.indexIncident()
//     .then(ui.indexIncidentSuccess)
//     .catch(ui.indexIncidentFailure)
// }

// const onShowIncident = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.showIncident(data.incident.id)
//     .then(ui.showIncidentSuccess)
//     .catch(ui.showIncidentFailure)
// }
const onDeleteIncident = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (confirm('Are you sure you want to delete this incident')) {
    api.deleteIncident(data.incident.id)
      .then(ui.deleteIncidentSuccess)
      .then(onClearList())
      .catch(ui.deleteIncidentFailure)
  }
}
const onUpdateIncident = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateIncident(data)
    .then(ui.updateIncidentSuccess)
    .then(onClearList())
    .catch(ui.updateIncidentFailure)
  // console.log('working')
}
// const hideContent = function () {
//   event.preventDefault()
//   $('.content').addClass('hidden')
// }

const onGetUserIncidents = function (event) {
  event.preventDefault()
  api.getUserIncidents()
    .then(ui.getUserIncidentsSuccess)
  // User can switch between "View All" and "View My" without hitting "Clear"
    .then(onClearList())
    .catch(ui.getUserIncidentsFailure)
}

const onClearList = function () {
  event.preventDefault()
  $('.handlebars').hide() // Clears the  get-all list when user clicks clear button
  // $('.handlebars-mod').hide() // Clears the user list when user clicks clear button
  $('#clear-list').addClass('hidden') // Hide clear button after user clears list
}

const onGetAllIncidents = function (event) {
  event.preventDefault()
  api.getAllIncidents()
    .then(ui.getAllIncidentsSuccess)
    .then(onClearList())
    .catch(ui.getAllIncidentsFailure)
}

const addHandlers = function () {
  $('#create-incident').on('submit', onCreateIncident)
  // $('#index-incident').on('submit', onIndexIncident)
  // $('#show-incident').on('submit', onShowIncident)
  $('#delete-incident').on('submit', onDeleteIncident)
  // $('.content').on('submit', '.delete-survey', onDeleteIncident)
  $('#update-incident').on('submit', onUpdateIncident)
  // $('#clear-list').on('click', hideContent)
  $('#user-incidents').on('submit', onGetUserIncidents)
  $('#all-incidents').on('submit', onGetAllIncidents)
  $('#clear-list').on('submit', onClearList)
}

module.exports = {
  addHandlers
}

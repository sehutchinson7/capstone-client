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
    .catch(ui.createIncidentFailure)
  console.log('working')
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
      .catch(ui.deleteIncidentFailure)
  }
}
const onUpdateIncident = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateIncident(data)
    .then(ui.updateIncidentSuccess)
    .catch(ui.updateIncidentFailure)
  console.log('working')
}
// const hideContent = function () {
//   event.preventDefault()
//   $('.content').addClass('hidden')
// }

// const onUserIncidents = function () {
//   event.preventDefault()
//   api.indexSurvey()
//     .then(ui.userSurveysSuccess)
//     .catch(ui)
// }
const onGetUserIncidents = function (event) {
  event.preventDefault()
  api.getUserIncidents()
    .then(ui.getUserIncidentsSuccess)
  // User can switch between "View All" and "View My" without hitting "Clear"
    .catch(ui.getUserIncidentsFailure)
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
}

module.exports = {
  addHandlers
}

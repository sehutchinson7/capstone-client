'use strict'
const showUserIncidentsTemplate = require('../templates/user-incidents.handlebars')
const showAllIncidentsTemplate = require('../templates/get-all-incidents.handlebars')
// const showIncidentsTemplate = require('../templates/incident-listing.handlebars')
// const showIncidentTemplate = require('../templates/incident-show.handlebars')
// const showUserIncidentsTemplate = require('../templates/user-incidents.handlebars')

const createIncidentSuccess = function () {
  $('#message').text('Incident created!')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}

const createIncidentFailure = function (data) {
  $('#message').text('Failed to create incident')
  $('#message').css('background-color', '#ff6666')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}

const deleteIncidentSuccess = function () {
  $('#message').text('Incident Deleted')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
  // $('#user-surveys-btn').click()
}

const deleteIncidentFailure = function (data) {
  $('#message').text('Failed to delete incident')
  $('#message').css('background-color', '#ff6666')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}

const updateIncidentSuccess = function () {
  $('#message').text('Incident Updated')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}

const updateIncidentFailure = function (data) {
  $('#message').text('Failed to Update Incident')
  $('#message').css('background-color', '#ff6666')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}

const getUserIncidentsSuccess = function (data) {
  const showUserIncidentsHtml = showUserIncidentsTemplate({
    user: data.user
  })
  $('.handlebars').empty() // Prevents the list from duplicating
  $('.content').append(showUserIncidentsHtml)
  $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View My Incidents"
  if (data.user.incidents && data.user.incidents.length === 0) {
    $('#message').text('You have not made any reports yet. You can add one by filling out the forms above.')
    $('#message').css('background-color', '#ff6666')
    setTimeout(() => {
      $('#message').text('')
    }, 5000)
  } else {
    $('#message').text('Successfully retrieved your incidents')
    $('#message').css('background-color', '#d5fdd5')
    setTimeout(() => $('#message').html(''), 2000)
  }
}

const getAllIncidentsSuccess = function (data) {
  const showAllIncidentsHtml = showAllIncidentsTemplate({
    incidents: data.incidents
  })
  $('.handlebars').empty() // Prevents the list from duplicating
  $('.content').append(showAllIncidentsHtml)
  $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View My Incidents"
  if (data.incidents && data.incidents.length === 0) {
    $('#message').text('There are currently no incidents in the database. You can add one by filling out the form above')
    $('#message').css('background-color', '#ff6666')
    setTimeout(() => {
      $('#message').text('')
    }, 5000)
  } else {
    $('#message').text('Successfully retrieved all incidents')
    $('#message').css('background-color', '#d5fdd5')
    setTimeout(() => $('#message').html(''), 2000)
  }
}

module.exports = {
  createIncidentSuccess,
  createIncidentFailure,
  updateIncidentSuccess,
  updateIncidentFailure,
  deleteIncidentSuccess,
  deleteIncidentFailure,
  getUserIncidentsSuccess,
  getAllIncidentsSuccess
}

'use strict'
const showUserIncidentsTemplate = require('../templates/user-incidents.handlebars')

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
  $('.handlebars-mod').empty() // Prevents the list from duplicating
  $('.content').append(showUserIncidentsHtml)
  $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View My Incidents"
  if (data.incidents && data.incidents.length === 0) {
    $('#update-message').text('There are currently no incidents in the database.')
    $('#update-message').css('background-color', '#ff6666')
    setTimeout(() => {
      $('#update-message').text('')
    }, 5000)
  } else {
    $('#message').text('Successfully retrieved incidents')
    $('#message').css('background-color', '#d5fdd5')
  }
}

module.exports = {
  createIncidentSuccess,
  createIncidentFailure,
  updateIncidentSuccess,
  updateIncidentFailure,
  deleteIncidentSuccess,
  deleteIncidentFailure,
  getUserIncidentsSuccess
}

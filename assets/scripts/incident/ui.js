'use strict'
const store = require('../store')

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

// const indexIncidentSuccess = function (data) {
//   const getIncidentHtml = showIncidentsTemplate({
//     incidents: data.incidents
//   })
//   $('.handlebars').empty()
//   // $('.content').empty()
//   $('.content').append(getIncidentHtml)
//   // $('#message').text('Index works!')
//   // $('#message').css('background-color', '#d5fdd5')
//   $('.content').removeClass('hidden')
//   $('form').trigger('reset')
// }

// const userIncidentsSuccess = function (data) {
//   $('.handlebars').empty()
//   $('.content').removeClass('hidden')
//   // $('.content').empty()
//
//   // console.log(store.user)
//   // console.log(data)

  // const userIncidents = []
  // data.incidents.forEach(function (survey) {
  //   if (survey.owner === store.user._id) {
  //     // console.log('true')
  //     userSurveys.push(survey)
  //   } else {
  //     // console.log('false')
  //   }
  // })
  //
  // // console.log(userSurveys)
  //
  // userSurveys.forEach(function (survey) {
  //   const getUserSurveyHtml = showUserSurveysTemplate({
  //     survey: survey
  //   })
  //   $('.content').append(getUserSurveyHtml)
  // })
  //
  // $('form').trigger('reset')
// }
//
// const indexSurveyFailure = function (data) {
//   $('#message').text('Failed to get surveys')
//   $('#message').css('background-color', '#ff6666')
//   setTimeout(() => $('#message').html(''), 2000)
//   $('form').trigger('reset')
//   // console.log(data)
// }
// const showSurveySuccess = function (data) {
//   // console.log(data.survey)
//   const getSurveyHtml = showSurveyTemplate({
//     survey: data.survey
//   })
//   $('.content').removeClass('hidden')
//   $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
//   $('.content').append(getSurveyHtml)
//   $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View All Animals"
//   // $('#message').text('Show works!')
//   // $('#message').css('background-color', '#d5fdd5')
//   // setTimeout(() => $('#message').html(''), 2000)
//   $('form').trigger('reset')
// }
// const showSurveyFailure = function (data) {
//   $('#message').text('Failed to get survey')
//   $('#message').css('background-color', '#ff6666')
//   setTimeout(() => $('#message').html(''), 2000)
//   $('form').trigger('reset')
// }
// const deleteSurveySuccess = function () {
//   $('#message').text('Survey Deleted')
//   $('#message').css('background-color', '#d5fdd5')
//   setTimeout(() => $('#message').html(''), 2000)
//   $('form').trigger('reset')
//   $('#user-surveys-btn').click()
// }
// const deleteSurveyFailure = function (data) {
//   $('#message').text('Failed to delete survey')
//   $('#message').css('background-color', '#ff6666')
//   setTimeout(() => $('#message').html(''), 2000)
//   $('form').trigger('reset')
// }
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
module.exports = {
  createIncidentSuccess,
  createIncidentFailure,
  updateIncidentSuccess,
  updateIncidentFailure
  // userSurveysSuccess
  // indexSurveyFailure,
  // indexSurveySuccess,
  // showSurveySuccess,
  // showSurveyFailure,
  // deleteSurveySuccess,
  // deleteSurveyFailure,
}

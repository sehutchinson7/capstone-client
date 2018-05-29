'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('#modal-auth').modal('hide')
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('.modal-message').text('Failure signing up')
  $('.modal-message').css('background-color', '#ff6666')
  $('form').trigger('reset')
  setTimeout(() => $('.modal-message').html(''), 2000)
}

const signInSuccess = function (data) { // represents what the api is sending back (the api response)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('.create-answer').removeClass('hidden')
  $('#modal-auth').modal('hide')
  $('.survey-content').removeClass('hidden')
  $('#modal-btn').text('Change Password')
  $('.content').removeClass('hidden')
  store.user = data.user
  $('form').trigger('reset')
  $('.body-content').addClass('color-change')
  $('#user-surveys').removeClass('hidden')
  $('#index-survey').removeClass('hidden')
}

const signInFailure = function (data) {
  $('.modal-message').text('Failure signing in')
  $('.modal-message').css('background-color', '#ff6666')
  $('form').trigger('reset')
  setTimeout(() => $('.modal-message').html(''), 2000)
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  store.user = null
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('.content').addClass('hidden')
  $('.survey-content').addClass('hidden')
  $('#modal-auth').modal('hide')
  $('form').trigger('reset')
  $('#modal-btn').text('Sign up / Sign in')
  $('.body-content').removeClass('color-change')
  $('#user-surveys').addClass('hidden')
  $('#index-survey').addClass('hidden')
}

const signOutFailure = function (data) {
  // console.log('signup failure')
  $('#message').text('Failure signing out')
  $('#message').css('background-color', '#F2DEDE')
  setTimeout(() => $('#message').text(''), 2000)
  $('form').trigger('reset')
}

const changePassSuccess = function (data) {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('#modal-auth').modal('hide')
  $('form').trigger('reset')
}

const changePassFailure = function (data) {
  $('.modal-message').text('Failure changing password')
  $('.modal-message').css('background-color', '#ff6666')
  setTimeout(() => $('.modal-message').html(''), 2000)
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}

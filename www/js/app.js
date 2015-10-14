angular.module('starter', ['ionic', 'ionic-audio', 'ngCordova', 'starter.controllers', 'starter.services', 'angular-loading-bar', 'ngAnimate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('results', {
    url: '/results',
    templateUrl: 'templates/results.html',
    controller: 'resultsCtrl'
  })

  .state('player', {
    url: '/player',
    templateUrl: 'templates/player.html',
    controller: 'playerCtrl'
  })

  .state('bookmarks', {
    url: '/bookmarks',
    templateUrl: 'templates/bookmarks.html',
    controller: 'bookmarksCtrl'
  })

  $urlRouterProvider.otherwise('/')
});

angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl', function($scope, ApiCall, $state) {

  $scope.categories = categories;

  $scope.doSearch = function(search_term, duration) {
    ApiCall.makeCall(search_term, duration).then(function() {
      $state.go('results');
    })
  };

})

.controller('resultsCtrl', function($scope, $http, ApiCall, $state) {

  $scope.results = ApiCall.getResults();

  $scope.setPlayer = function(result) {
    ApiCall.setTrack(result);
    console.log(result);
    $state.go('player');
  }

})

.controller('playerCtrl', function($scope, ApiCall) {

  $scope.trackOptions = ApiCall.getTrack();

  $scope.myTrack = {
    url: $scope.trackOptions.urls.high_mp3,
    episode: $scope.trackOptions.title,
    show: $scope.trackOptions.channel.title,
    art: $scope.trackOptions.urls.image,
    description: $scope.trackOptions.description
  }

})

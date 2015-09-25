angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl', function($scope, ApiCall, $state) {

  $scope.categories = categories;

  $scope.doSearch = function() {
    var search_term = 'business';
    ApiCall.makeCall(search_term).then(function() {
      $state.go('results');
    })
  };

})

.controller('resultsCtrl', function($scope, $http, ApiCall) {

  $scope.results = ApiCall.getResults();
  console.log($scope.results);

})

.controller('playerCtrl', function($scope) {
  $scope.myTrack = {
    url: "http://robbbenson.com/01%20Angel.mp3",
    artist: "timmy mallet",
    title: "wack aday",
    art: "http://images.askmen.com/top_10/celebrity/breakfast-tv-presenters_423192.jpg"
  }

})

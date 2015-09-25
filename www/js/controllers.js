angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl', function($scope, ApiCall) {

  $scope.categories = categories;

  $scope.doSearch = function() {

    $scope.search_term = 'business';

    ApiCall(search_term);

  };

})

.controller('resultsCtrl', function($scope, $http, ApiCall) {

  // console.log(ApiCall.results);

})

.controller('playerCtrl', function($scope) {
  $scope.myTrack = {
    url: "http://robbbenson.com/01%20Angel.mp3",
    artist: "timmy mallet",
    title: "wack aday",
    art: "http://images.askmen.com/top_10/celebrity/breakfast-tv-presenters_423192.jpg"
  }

})

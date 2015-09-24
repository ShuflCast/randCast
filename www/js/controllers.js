angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl', ['apiCall', function($scope, apiCall) {

  $scope.categories = categories;

  $scope.doSearch = function() {

    var search_term = 'business';
    var url = 'https://api.audioboom.com/tag/' + search_term + '/audio_clips'

    apiCall(url);

  };

}])

.controller('resultsCtrl', function($scope, $http, 'apiCall') {

  console.log(apiCall.results);

})

.controller('playerCtrl', function($scope) {
  $scope.myTrack = {
    url: "http://robbbenson.com/01%20Angel.mp3",
    artist: "timmy mallet",
    title: "wack aday",
    art: "http://images.askmen.com/top_10/celebrity/breakfast-tv-presenters_423192.jpg"
  }

})

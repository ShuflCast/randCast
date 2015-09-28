var app = angular.module('starter.controllers', ['ionic'])

app.controller('homeCtrl', function($scope, ApiCall, $state) {

  $scope.categories = categories;

  $scope.doSearch = function(search_term, duration) {
    ApiCall.makeCall(search_term, duration).then(function() {
      $state.go('results');
    })
  };
})

app.controller('resultsCtrl', function($scope, $http, ApiCall, $state) {

  $scope.results = ApiCall.getResults();

  $scope.setPlayer = function(result) {
    ApiCall.setTrack(result);
    console.log(result);
    $state.go('player');
  }

})

app.controller('playerCtrl', function($scope, ApiCall) {

  $scope.trackOptions = ApiCall.getTrack();

  $scope.myTrack = {
    url: $scope.trackOptions.audio_files[0].mp3,
    episode: $scope.trackOptions.title,
    show: $scope.trackOptions.show_title,
    art: $scope.trackOptions.image_urls.full,
    description: $scope.trackOptions.description
  }

})

app.filter('durationFilter', function(ApiCall) {

 var min = ApiCall.returnMin();
 var max = ApiCall.returnMax();

 return function (items) {
   var filtered = [];
   for (var i = 0; i < items.length; i++) {
     var item = items[i];
     if (item.duration >= min && item.duration <= max) {
       filtered.push(item);
     }
   }
   return filtered;
 };
});

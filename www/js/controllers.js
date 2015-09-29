var app = angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl', function($scope, ApiCall, $state, $ionicPopup) {

  $scope.categories = categories;

  $scope.doSearch = function(search_term, duration) {
    if (search_term === undefined) {
      $scope.showAlert();
    } else {
      ApiCall.makeCall(search_term, duration).then(function() {
        $state.go('results');
      })
    }
  };

  // An alert dialog
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Alert',
      template: 'Please select a genre'
    });
    alertPopup.then(function(res) {
    });
  };
})

app.controller('resultsCtrl', function($scope, $http, ApiCall, $state) {

  $scope.results = ApiCall.getResults();

  $scope.setPlayer = function(result) {
    ApiCall.setTrack(result);
    $state.go('player');
  }
})

.controller('playerCtrl', function($scope, ApiCall, $cordovaSocialSharing) {


  $scope.trackOptions = ApiCall.getTrack();

  $scope.myTrack = {
    url: $scope.trackOptions.audio_files[0].mp3,
    episode: $scope.trackOptions.title,
    show: $scope.trackOptions.show_title,
    art: $scope.trackOptions.image_urls.full,
    description: $scope.trackOptions.description
  }

  $scope.shareAnywhere = function() {
    $cordovaSocialSharing.share("I've just been listening to " + $scope.myTrack.show + " on rand(Cast)", "rand(Cast) - Get shuffling!", $scope.myTrack.art);
  }
})

app.filter('durationFilter', function(ApiCall) {

 var min = ApiCall.returnMin();
 var max = ApiCall.returnMax();

 return function(items) {
   var filtered = [];
   for (var i = 0; i < items.length; i++) {
     var item = items[i];
     if (item.duration >= min && item.duration <= max) {
       filtered.push(item);
     }
   }
   return filtered;
   console.log(min)
   console.log(max)
 };
});

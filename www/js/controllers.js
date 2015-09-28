angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl', function($scope, ApiCall, $state, $ionicPopup) {

  $scope.categories = categories;

  $scope.doSearch = function(search_term) {
    if (search_term === undefined) {
      $scope.showAlert();
    } else {
      ApiCall.makeCall(search_term).then(function() {
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

.controller('resultsCtrl', function($scope, $http, ApiCall, $state) {

  $scope.results = ApiCall.getResults();

  $scope.showPlayer = function(result) {
    ApiCall.setTrack(result);
    console.log(result);
    $state.go('player');
  }
})

.controller('playerCtrl', function($scope, ApiCall, $cordovaSocialSharing) {

  $scope.trackOptions = ApiCall.getTrack();

  $scope.myTrack = {
    url: $scope.trackOptions.urls.high_mp3,
    episode: $scope.trackOptions.title,
    show: $scope.trackOptions.channel.title,
    art: $scope.trackOptions.urls.image,
    description: $scope.trackOptions.description
  }

  $scope.shareAnywhere = function() {
    $cordovaSocialSharing.share("I've just been listening to " + $scope.myTrack.show + " on rand(Cast)", "rand(Cast) - Get shuffling!", $scope.myTrack.art);
  }
})

var app = angular.module('starter.controllers', ['ionic'])

var filteredTracks;

app.controller('homeCtrl', function($scope, ApiCall, $state, $ionicPopup, $filter) {

  // $scope.login = function() {
  //   Auth.logIn.$authWithOAuthRedirect("facebook");
  //   console.log('logged in')
  // };

  // $scope.users = Users;
  // $scope.addUser = function() {
  // var name = prompt("What do you need to buy?");
  //   if (name) {
  //     $scope.users.$add({
  //       "name": name
  //       });
  //     }
  //   };
  // });

  $scope.categories = categories;

  $scope.duration_options = ['1 - 15', '15 - 45', '45 - 90', '90 +'];

  $scope.duration_index = 1;

  $scope.setGenre = function(search_term) {
    $scope.search_term = search_term;
    console.log(search_term);
  };

  $scope.doSearch = function(search_term, duration) {
    if (search_term === undefined) {
      $scope.showAlert();
    } else {
      ApiCall.makeCall(search_term, duration).then(function() {
        $state.go('results');
      });
    };
  };

  $scope.feelingLucky = function(search_term, duration) {
    if (search_term === undefined) {
      $scope.showAlert();
    } else {
      ApiCall.makeCall(search_term, duration)
      .then(function() {
        $scope.results = ApiCall.getResults();
      }).then(function() {
        $filter('durationFilter')($scope.results);
        $scope.filteredResults = filteredTracks;
        console.log($scope.filteredResults);
      }).then(function() {
        $scope.track = $scope.filteredResults[0];
      }).then(function() {
        ApiCall.setTrack($scope.track);
      }).then(function() {
        $state.go('player');
      });
    };
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

  $scope.doRefresh = function() {
    $scope.results = ApiCall.getResults();
    $scope.$broadcast('scroll.refreshComplete');
  }
})

app.controller('playerCtrl', function($scope, ApiCall, $cordovaSocialSharing) {


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

 return function(items) {
   var min = ApiCall.returnMin();
   var max = ApiCall.returnMax();
   var filtered = [];
   for (var i = 0; i < items.length; i++) {
     var item = items[i];
     if (item.duration >= min && item.duration <= max) {
      console.log(item.duration)
       filtered.push(item);
     }
   }
   filteredTracks = filtered;
   return filtered;
 };
});

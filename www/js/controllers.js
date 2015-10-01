var app = angular.module('starter.controllers', ['ionic'])

var filteredTracks;

app.controller('homeCtrl', function($scope, ApiCall, $state, $ionicPopup, $filter, $localstorage) {

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
    // if (search_term === undefined) {
    //   $scope.showAlert();
    // } else {
    //   ApiCall.makeCall(search_term, duration)
    //     .then(function() {
    //       $scope.results = ApiCall.getResults();
    //     }).then(function() {
    //       $filter('durationFilter')($scope.results);
    //       $scope.filteredResults = filteredTracks;
    //     }).then(function() {
    //       $scope.track = $scope.filteredResults[0];
    //     }).then(function() {
    //       ApiCall.setTrack($scope.track);
    //     }).then(function() {
    //       console.log('HELLLOOOOO')
    //       $state.go('player');
    //     });
    // };
    $scope.track = {
        "title": 'ep.428 Toby vs. Antonio',
        "show_title": 'Ping Pong Hour',
        "image_urls": {
          "full": "../img/retesh.jpg"
          },
        "description": "Welcome back to Ping Pong Hour. This time around we are bringing you the silky sounds of Toby 'T-Bag' Clarke and Antonio 'Vicious' Voce from the Makers Academy Ping Pong stadium. Strap your ears down for the epic sounds of Ping verus Pong, the likes of which you have never heard before.",
        "duration": 3666,
        "audio_files": [
          {
            "mp3": "https://www.audiosear.ch/media/2f39e010fb34212ce8f6a6c19d2bce0b/0/public/audio_file/6356/208115894-nottoodeepwithgrace-ep-24-nikki-limo.mp3"
          }
          ]
        }

      ApiCall.setTrack($scope.track)
    $state.go('player');
  };

  $scope.seeBookmarks = function() {
    $state.go('bookmarks');
  };

  // An alert dialog
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Alert',
      template: 'Please select a genre'
    });
    alertPopup.then(function(res) {});
  };
})

app.controller('resultsCtrl', function($scope, $http, ApiCall, $state, $localstorage) {

  $scope.listCanSwipe = true;
  $scope.results = ApiCall.getResults();

  $scope.setPlayer = function(result) {
    ApiCall.setTrack(result);
    $state.go('player');
  }

  $scope.addBookmark = function(result) {
    console.log('CAROLINE MANZO!')
    console.log(result)
    $scope.keyName = result.title + '-' + result.show_title;
    $localstorage.setObject($scope.keyName, {
      bookmark: {
        url: result.audio_files[0].mp3,
        episode: result.title,
        show: result.show_title,
        art: result.image_urls.full,
        art_small: result.image_urls.thumb,
        description: result.description,
        duration: result.duration
      }
    })
  };

  $scope.doRefresh = function() {
    $scope.results = ApiCall.getResults();
    $scope.$broadcast('scroll.refreshComplete');
  }
})

app.controller('playerCtrl', function($scope, ApiCall, $cordovaSocialSharing, $localstorage) {

  $scope.myTrack = ApiCall.getTrack();

  $scope.shareAnywhere = function() {
    $cordovaSocialSharing.share("I've just been listening to " + $scope.myTrack.show + " on rand(Cast)", "rand(Cast) - Get shuffling!", $scope.myTrack.art);
  };

  $scope.addBookmark = function() {
    $scope.keyName = $scope.myTrack.episode + '-' + $scope.myTrack.show;
    $localstorage.setObject($scope.keyName, {
      bookmark: $scope.myTrack
    })
  };
});

app.controller('bookmarksCtrl', function($scope, ApiCall, $localstorage, $state) {
  $scope.bookmarks = $localstorage.getObjects();

  $scope.listCanSwipe = true;

  $scope.setPlayer = function(result) {
    ApiCall.setTrack(result);
    $state.go('player');
  };

  $scope.deleteBookmark = function(key) {
    console.log(key)
    $localstorage.deleteObject(key);
  }
});

app.filter('durationFilter', function(ApiCall) {

  return function(items) {
    var min = ApiCall.returnMin();
    var max = ApiCall.returnMax();
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.duration >= min && item.duration <= max) {
        filtered.push(item);
      }
    }
    filteredTracks = filtered;
    return filtered;
  };
});

app.filter('secondsToDateTime', [function() {
  return function(seconds) {
    return new Date(1970, 0, 1).setSeconds(seconds);
  };
}])

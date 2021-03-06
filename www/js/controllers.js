var app = angular.module('starter.controllers', ['ionic'])

var filteredTracks;

app.controller('homeCtrl', function($scope, ApiCall, $state, $ionicPopup, $filter, $localstorage) {

  $scope.duration_options = ['1 - 15', '15 - 45', '45 - 90', '90 +'];

  $scope.duration_index = 1;

  $scope.setGenre = function(search_term) {

    $scope.search_term = search_term;
  };

  $scope.doSearch = function(search_term, duration) {
    console.log('search')
    if (search_term === undefined) {
      $scope.showAlert();
    } else {
      ApiCall.makeCall(search_term, duration).then(function() {
        $state.go('results');
      });
    };
  };

  $scope.feelingLucky = function(search_term, duration) {
    console.log('lucky')
    if (search_term === undefined) {
      $scope.showAlert();
    } else {
      ApiCall.makeCall(search_term, duration)
      .then(function() {
        $scope.results = ApiCall.getResults();
      }).then(function() {
        $filter('durationFilter')($scope.results);
        $scope.filteredResults = filteredTracks;
      }).then(function() {
        $scope.track = $scope.filteredResults[0];
      }).then(function() {
        ApiCall.setTrack($scope.track);
      }).then(function() {
        $state.go('player');
      });
    };
  };

  $scope.seeBookmarks = function() {

    $state.go('bookmarks');
  };

  $scope.showAlert = function() {

    var alertPopup = $ionicPopup.alert({
      title: 'Alert',
      template: 'Please select a genre'
    });
    alertPopup.then(function(res) {});
  };
})

app.controller('resultsCtrl', function($scope, $http, ApiCall, $state, $localstorage, $ionicListDelegate, $ionicPopup, $timeout) {

  $scope.listCanSwipe = true;
  $scope.results = ApiCall.getResults();

  $scope.setPlayer = function(result) {

    ApiCall.setTrack(result);
    $state.go('player');
  }

  $scope.addBookmark = function(result) {

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
    $ionicListDelegate.closeOptionButtons();
    $scope.showPopup();
  };

  $scope.doRefresh = function() {

    $scope.results = ApiCall.getResults();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.showPopup = function() {

   $scope.data = {}
   var myPopup = $ionicPopup.show({
     template: 'Bookmark Added',
   })
   $timeout(function() {
     myPopup.close();
   }, 1000);
 }
})

app.controller('playerCtrl', function($scope, ApiCall, $cordovaSocialSharing, $localstorage, $ionicPopup, $timeout) {

  $scope.myTrack = ApiCall.getTrack();

  $scope.shareAnywhere = function() {

    $cordovaSocialSharing.share("I've just been listening to " + $scope.myTrack.show + " on rand(Cast)", "rand(Cast) - Get shuffling!", $scope.myTrack.art);
  };

  $scope.addBookmark = function() {

    $scope.keyName = $scope.myTrack.episode + '-' + $scope.myTrack.show;
    $localstorage.setObject($scope.keyName, {
      bookmark: $scope.myTrack
    })
    $scope.showPopup();
  };

  $scope.showPopup = function() {

   $scope.data = {}
   var myPopup = $ionicPopup.show({
     template: 'Bookmark Added',
   })
   $timeout(function() {
     myPopup.close();
   }, 1000);
 }
});

app.controller('bookmarksCtrl', function($scope, ApiCall, $localstorage, $state, $ionicListDelegate) {

  $scope.bookmarks = $localstorage.getObjects();

  $scope.listCanSwipe = true;

  $scope.setPlayer = function(result) {

    ApiCall.setTrack(result);
    $state.go('player');
  };

  $scope.deleteBookmark = function(key) {

    $localstorage.deleteObject(key);
    $scope.bookmarks = $localstorage.getObjects();
    $ionicListDelegate.closeOptionButtons();
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
    return Math.round(seconds/60);
  };
}])

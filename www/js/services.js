angular.module('starter.services', ['angular-loading-bar'])

.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}])

.factory('ApiCall', function($http) {

  var results = [];
  var min = null;
  var max = null;
  var track = [];

  var filter_duration = function(duration) {

    for (i = 0; i < duration_categories.length; i++) {
      if (duration_categories[i].name === duration) {
        min = duration_categories[i].min;
        max = duration_categories[i].max;
      };
    };
  };

  var findIndexInData = function(data, property, value) {
    var result = -1;
    data.some(function(item, i) {
      if (item[property] === value) {
        result = i;
        return true;
      }
    });
    return result;
  };

  var searchResults = function(search_term) {
    var index = findIndexInData(categories, 'category', search_term);
    var params_string = 'filters%5Bcategories.id%5D=' + categories[index]['id'];
    return params_string;
  };

  return {

    returnMin: function() {
      return min;
    },

    returnMax: function() {
      return max;
    },

    makeCall: function(search_term, duration) {
      var params = searchResults(search_term);
      var url = 'https://intense-forest-8107.herokuapp.com/search?search_term=' + params;
      return $http.get(url).then(function(response) {
        results = response.data;
        filter_duration(duration);
        return results;
      });
    },

    getResults: function() {
      return results.sort(function() {
        return 0.5 - Math.random();
      });
    },

    setTrack: function(result) {
      if (result.bookmark != undefined) {
        track = result['bookmark'];
      } else {
        track = {
          url: result.audio_files[0].mp3,
          episode: result.title,
          show: result.show_title,
          art: result.image_urls.full,
          art_small: result.image_urls.thumb,
          description: result.description,
          duration: result.duration
        };
      };
      return track;
    },
    getTrack: function() {
      return track;
    }
  };
})

.factory('$localstorage', ['$window', function($window) {
  return {
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObjects: function() {
      var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
      while (i--) {
        values.push(JSON.parse($window.localStorage.getItem(keys[i])));
      }
      return values;
    },
    deleteObject: function(key) {
      $window.localStorage.removeItem(key);
    }
  }
}]);

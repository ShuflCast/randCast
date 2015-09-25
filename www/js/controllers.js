angular.module('starter.controllers', ['ionic'])

.controller('homeCtrl', function($scope, $http) {

  $scope.categories = categories;

  $scope.doSearch = function() {
    var method = 'GET';
    var url = 'https://www.audiosear.ch/api/search/episodes/filters[categories.name_lc]=Comedy';
    var params = {
      'client_id': app_id,
      'redirect_uri': callback,
      'response_type': 'code',
      'secret': secret
    }

    $http.get(url, {params: params}).then(function(response) {
      $scope.results = response.data;
      console.log($scope.results);
    });

  };

})

.controller('resultsCtrl', function($scope, $http) {

  $scope.json = [{
    "query": "filterscategories.name _lc=science",
    "total_results": 4919,
    "page": 1,
    "results_per_page": 10,
    "results": [{
      "id": 13925,
      "title": "The PM’s Prizes for Science",
      "description": "The Prime Minister’s Prizes for Science 2014\nAussie dinosaurs - more Argentinean or Asian?\nHow atoms and crystals move deep beneath the Earth\nA walking tour of the Royal Society\nThe big difference between science and politics",
      "date_created": "2014-11-01",
      "date_added": "2015-07-21T00:23:49.521Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/the-pme28099s-prizes-for-science/5857872",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/the-pme28099s-prizes-for-science/5857872",
      "physical_location": "rss",
      "duration": 3230,
      "updated_at": "2015-07-29T17:44:37.985Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 13838,
        "mp3": "https://www.audiosear.ch/media/756a5b69c5f332ced1a4d458a89f1abd/0/public/audio_file/13838/ssw_20141101.mp3",
        "ogg": "https://www.audiosear.ch/media/9377ae7d08311926b6d301a2b159edd0/0/public/audio_file/13838/ssw_20141101.ogg",
        "duration": "00:53:50",
        "url_title": "the-pm-s-prizes-for-science",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "Prime Minister",
        "category": "entity",
        "score": 1.0,
        "type": "Position"
      }, {
        "entity": "Human Interest",
        "category": "topic",
        "score": 0.954,
        "type": null
      }, {
        "entity": "crystal",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "Royal Society",
        "category": "entity",
        "score": 0.882,
        "type": "Organization"
      }, {
        "entity": "Politics",
        "category": "topic",
        "score": 0.774,
        "type": null
      }, {
        "entity": "Science",
        "category": "topic",
        "score": 0.754717,
        "type": null
      }],
      "topics": [{
        "id": 332300,
        "is_confirmed": false,
        "identifier": null,
        "name": "Science",
        "score": 0.754717,
        "category": "topic",
        "entity_type": null,
        "item_id": 13925,
        "extra": "---\noriginal: Science\n",
        "created_at": "2015-07-29T17:44:37.849Z",
        "updated_at": "2015-07-29T17:44:37.849Z"
      }, {
        "id": 332298,
        "is_confirmed": false,
        "identifier": null,
        "name": "Politics",
        "score": 0.774,
        "category": "topic",
        "entity_type": null,
        "item_id": 13925,
        "extra": "---\noriginal: Politics\n",
        "created_at": "2015-07-29T17:44:37.484Z",
        "updated_at": "2015-07-29T17:44:37.484Z"
      }, {
        "id": 332297,
        "is_confirmed": false,
        "identifier": null,
        "name": "Human Interest",
        "score": 0.954,
        "category": "topic",
        "entity_type": null,
        "item_id": 13925,
        "extra": "---\noriginal: Human Interest\n",
        "created_at": "2015-07-29T17:44:37.032Z",
        "updated_at": "2015-07-29T17:44:37.032Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/13925",
        "ui": "https://www.audiosear.ch/a/3665/the-pm-s-prizes-for-science"
      },
      "highlights": []
    }, {
      "id": 13933,
      "title": "Commemorating 50 years of ABC Science. Part 1 of 2",
      "description": "Commemorating 50 years of ABC Science. Part 1 of 2. ",
      "date_created": "2014-09-06",
      "date_added": "2015-07-21T00:24:03.103Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/commemorating-50-years-of-abc-science-part-1-of-2/5720376",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/commemorating-50-years-of-abc-science-part-1-of-2/5720376",
      "physical_location": "rss",
      "duration": 3260,
      "updated_at": "2015-07-29T23:13:14.237Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 13846,
        "mp3": "https://www.audiosear.ch/media/41bee3e22d0fe88ef5a841443e8ef721/0/public/audio_file/13846/ssw_20140906.mp3",
        "ogg": "https://www.audiosear.ch/media/7cb10dd2ed8b3e8a7a4814035301b11d/0/public/audio_file/13846/ssw_20140906.ogg",
        "duration": "00:54:20",
        "url_title": "commemorating-50-years-of-abc-science-part-1-of-2",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "Education",
        "category": "topic",
        "score": 1.0,
        "type": null
      }, {
        "entity": "australian broadcasting corporation",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "inland with sturt",
        "category": "tag",
        "score": 0.7,
        "type": null
      }, {
        "entity": "ABC Science",
        "category": "entity",
        "score": 0.686,
        "type": "Organization"
      }, {
        "entity": "Arts and Entertainment",
        "category": "topic",
        "score": 0.669039,
        "type": null
      }],
      "topics": [{
        "id": 346954,
        "is_confirmed": false,
        "identifier": null,
        "name": "Arts and Entertainment",
        "score": 0.669039,
        "category": "topic",
        "entity_type": null,
        "item_id": 13933,
        "extra": "{\"original\"=\u003e\"Arts \u0026 Entertainment\"}",
        "created_at": "2015-07-29T23:13:14.167Z",
        "updated_at": "2015-07-29T23:13:14.167Z"
      }, {
        "id": 346953,
        "is_confirmed": false,
        "identifier": null,
        "name": "Education",
        "score": 1.0,
        "category": "topic",
        "entity_type": null,
        "item_id": 13933,
        "extra": "{\"original\"=\u003e\"Education\"}",
        "created_at": "2015-07-29T23:13:13.625Z",
        "updated_at": "2015-07-29T23:13:13.625Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/13933",
        "ui": "https://www.audiosear.ch/a/366d/commemorating-50-years-of-abc-science-part-1-of-2"
      },
      "highlights": []
    }, {
      "id": 17205,
      "title": "The Science Show celebrates 40 years",
      "description": "The Science Show celebrates 40 years. ",
      "date_created": "2015-08-29",
      "date_added": "2015-08-29T13:10:39.277Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/the-science-show-celebrates-40--years/6726326",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/the-science-show-celebrates-40--years/6726326",
      "physical_location": "rss",
      "duration": 3230,
      "updated_at": "2015-08-29T13:29:16.659Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 17030,
        "mp3": "https://www.audiosear.ch/media/a6a909f86fe1348da5988066bbd0701a/0/public/audio_file/17030/ssw_20150829.mp3",
        "ogg": "https://www.audiosear.ch/media/2926bedec4aee3e6d47aee9fc31ce292/0/public/audio_file/17030/ssw_20150829.ogg",
        "duration": "00:53:50",
        "url_title": "the-science-show-celebrates-40-years",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "Education",
        "category": "topic",
        "score": 1.0,
        "type": null
      }, {
        "entity": "Human Interest",
        "category": "topic",
        "score": 0.949,
        "type": null
      }, {
        "entity": "science education",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "stormin' the castle",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "Environment",
        "category": "topic",
        "score": 0.897,
        "type": null
      }],
      "topics": [{
        "id": 390742,
        "is_confirmed": false,
        "identifier": null,
        "name": "Environment",
        "score": 0.897,
        "category": "topic",
        "entity_type": null,
        "item_id": 17205,
        "extra": "---\noriginal: Environment\nrentities:\n- Philosophy of biology\n- Biology\n- Ecology\n- Greek loanwords\n",
        "created_at": "2015-08-29T13:12:02.990Z",
        "updated_at": "2015-08-29T13:12:13.288Z"
      }, {
        "id": 390739,
        "is_confirmed": false,
        "identifier": null,
        "name": "Education",
        "score": 1.0,
        "category": "topic",
        "entity_type": null,
        "item_id": 17205,
        "extra": "---\noriginal: Education\nrentities:\n- Philosophy of education\n- Knowledge sharing\n- Education\n",
        "created_at": "2015-08-29T13:12:01.870Z",
        "updated_at": "2015-08-29T13:12:06.023Z"
      }, {
        "id": 390741,
        "is_confirmed": false,
        "identifier": null,
        "name": "Human Interest",
        "score": 0.949,
        "category": "topic",
        "entity_type": null,
        "item_id": 17205,
        "extra": "---\noriginal: Human Interest\nrentities:\n- Journalism genres\n",
        "created_at": "2015-08-29T13:12:02.410Z",
        "updated_at": "2015-08-29T13:12:08.050Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/17205",
        "ui": "https://www.audiosear.ch/a/4335/the-science-show-celebrates-40-years"
      },
      "highlights": []
    }, {
      "id": 13909,
      "title": "The Science Show in San Jose: IT Central",
      "description": "Plastic increasing in the world’s oceans\nCitizen scientists gather with the pros\nCome in extra-terrestrials\nSouping up the controls in autonomous cars\nThe internet of the future and preserving today’s digital information",
      "date_created": "2015-02-21",
      "date_added": "2015-07-21T00:23:23.010Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/the-science-show-in-san-jose3a-it-central/6164144",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/the-science-show-in-san-jose3a-it-central/6164144",
      "physical_location": "rss",
      "duration": 3246,
      "updated_at": "2015-07-29T23:00:12.858Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 13822,
        "mp3": "https://www.audiosear.ch/media/0b45481320f535b671885150a1a935f0/0/public/audio_file/13822/ssw_20150221.mp3",
        "ogg": "https://www.audiosear.ch/media/fbf2c97d12a8d866f4e75f587b21e203/0/public/audio_file/13822/ssw_20150221.ogg",
        "duration": "00:54:06",
        "url_title": "the-science-show-in-san-jose-it-central",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "Technology \u0026 Internet",
        "category": "topic",
        "score": 0.997,
        "type": null
      }, {
        "entity": "Environment",
        "category": "topic",
        "score": 0.909,
        "type": null
      }, {
        "entity": "citizen science",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "crowdsourcing",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "internet",
        "category": "tag",
        "score": 0.7,
        "type": null
      }, {
        "entity": "human-based computation",
        "category": "tag",
        "score": 0.7,
        "type": null
      }, {
        "entity": "Business \u0026 Finance",
        "category": "topic",
        "score": 0.642,
        "type": null
      }, {
        "entity": "autonomous cars",
        "category": "entity",
        "score": 0.527,
        "type": null
      }],
      "topics": [{
        "id": 346466,
        "is_confirmed": false,
        "identifier": null,
        "name": "Business \u0026 Finance",
        "score": 0.642,
        "category": "topic",
        "entity_type": null,
        "item_id": 13909,
        "extra": "{\"original\"=\u003e\"Business_Finance\"}",
        "created_at": "2015-07-29T23:00:12.787Z",
        "updated_at": "2015-07-29T23:00:12.787Z"
      }, {
        "id": 346465,
        "is_confirmed": false,
        "identifier": null,
        "name": "Environment",
        "score": 0.909,
        "category": "topic",
        "entity_type": null,
        "item_id": 13909,
        "extra": "{\"original\"=\u003e\"Environment\"}",
        "created_at": "2015-07-29T23:00:12.220Z",
        "updated_at": "2015-07-29T23:00:12.220Z"
      }, {
        "id": 346464,
        "is_confirmed": false,
        "identifier": null,
        "name": "Technology \u0026 Internet",
        "score": 0.997,
        "category": "topic",
        "entity_type": null,
        "item_id": 13909,
        "extra": "{\"original\"=\u003e\"Technology_Internet\"}",
        "created_at": "2015-07-29T23:00:11.658Z",
        "updated_at": "2015-07-29T23:00:11.658Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/13909",
        "ui": "https://www.audiosear.ch/a/3655/the-science-show-in-san-jose-it-central"
      },
      "highlights": []
    }, {
      "id": 13934,
      "title": "The Science Show turns 39",
      "description": "Stephen Hawking’s Science Show interview from 1990\nThe story of Scott and Stopes\nRichard St. Barbe Baker’s environmental fears",
      "date_created": "2014-08-30",
      "date_added": "2015-07-21T00:24:04.826Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/the-science-show-turns-39/5706686",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/the-science-show-turns-39/5706686",
      "physical_location": "rss",
      "duration": 3230,
      "updated_at": "2015-07-29T23:16:19.560Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 13847,
        "mp3": "https://www.audiosear.ch/media/2fefa2fc301bf915ad756f53f07f9368/0/public/audio_file/13847/ssw_20140830.mp3",
        "ogg": "https://www.audiosear.ch/media/14c31c9e5b11c9cd8e61a563d81cef40/0/public/audio_file/13847/ssw_20140830.ogg",
        "duration": "00:53:50",
        "url_title": "the-science-show-turns-39",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "Environment",
        "category": "topic",
        "score": 1.0,
        "type": null
      }, {
        "entity": "Stephen Hawking",
        "category": "entity",
        "score": 0.936,
        "type": "Person"
      }, {
        "entity": "st. barbe, newfoundland and labrador",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "richard st. barbe baker",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "Arts and Entertainment",
        "category": "topic",
        "score": 0.84669,
        "type": null
      }, {
        "entity": "Nature and Environment",
        "category": "topic",
        "score": 0.822581,
        "type": null
      }, {
        "entity": "Human Interest",
        "category": "topic",
        "score": 0.746,
        "type": null
      }, {
        "entity": "Elections",
        "category": "topic",
        "score": 0.666667,
        "type": null
      }],
      "topics": [{
        "id": 347071,
        "is_confirmed": false,
        "identifier": null,
        "name": "Elections",
        "score": 0.666667,
        "category": "topic",
        "entity_type": null,
        "item_id": 13934,
        "extra": "{\"original\"=\u003e\"Elections\"}",
        "created_at": "2015-07-29T23:16:19.490Z",
        "updated_at": "2015-07-29T23:16:19.490Z"
      }, {
        "id": 347070,
        "is_confirmed": false,
        "identifier": null,
        "name": "Nature and Environment",
        "score": 0.822581,
        "category": "topic",
        "entity_type": null,
        "item_id": 13934,
        "extra": "{\"original\"=\u003e\"Nature \u0026 Environment\"}",
        "created_at": "2015-07-29T23:16:18.949Z",
        "updated_at": "2015-07-29T23:16:18.949Z"
      }, {
        "id": 347069,
        "is_confirmed": false,
        "identifier": null,
        "name": "Arts and Entertainment",
        "score": 0.84669,
        "category": "topic",
        "entity_type": null,
        "item_id": 13934,
        "extra": "{\"original\"=\u003e\"Arts \u0026 Entertainment\"}",
        "created_at": "2015-07-29T23:16:18.413Z",
        "updated_at": "2015-07-29T23:16:18.413Z"
      }, {
        "id": 347068,
        "is_confirmed": false,
        "identifier": null,
        "name": "Human Interest",
        "score": 0.746,
        "category": "topic",
        "entity_type": null,
        "item_id": 13934,
        "extra": "{\"original\"=\u003e\"Human Interest\"}",
        "created_at": "2015-07-29T23:16:17.869Z",
        "updated_at": "2015-07-29T23:16:17.869Z"
      }, {
        "id": 347067,
        "is_confirmed": false,
        "identifier": null,
        "name": "Environment",
        "score": 1.0,
        "category": "topic",
        "entity_type": null,
        "item_id": 13934,
        "extra": "{\"original\"=\u003e\"Environment\"}",
        "created_at": "2015-07-29T23:16:17.331Z",
        "updated_at": "2015-07-29T23:16:17.331Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/13934",
        "ui": "https://www.audiosear.ch/a/366e/the-science-show-turns-39"
      },
      "highlights": []
    }, {
      "id": 13931,
      "title": "A buzzing British Science festival",
      "description": "UK approaching 20% electricity from renewables\nLondon’s Francis Crick Institute to be a training hothouse for biomedical research\nKids observe bumblebees for science\nVoles show us how to be monogamous\nEpigenetics opens door for treatment of disease, development of new drugs\nSuspicion of Bronowski in post war Britain",
      "date_created": "2014-09-20",
      "date_added": "2015-07-21T00:23:59.652Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/a-buzzing-british-science-festival/5756578",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/a-buzzing-british-science-festival/5756578",
      "physical_location": "rss",
      "duration": 3259,
      "updated_at": "2015-07-29T23:08:44.779Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 13844,
        "mp3": "https://www.audiosear.ch/media/9c877c657500a7a17b24e58f88d37f6d/0/public/audio_file/13844/ssw_20140920.mp3",
        "ogg": "https://www.audiosear.ch/media/4cf2e18ae1d4acb1126af693afbfa7b4/0/public/audio_file/13844/ssw_20140920.ogg",
        "duration": "00:54:19",
        "url_title": "a-buzzing-british-science-festival",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "disease",
        "category": "entity",
        "score": 1.0,
        "type": "Medical Condition"
      }, {
        "entity": "electricity",
        "category": "entity",
        "score": 1.0,
        "type": "Industry Term"
      }, {
        "entity": "Health \u0026 Medical \u0026 Pharma",
        "category": "topic",
        "score": 0.99,
        "type": null
      }, {
        "entity": "Francis Crick Institute",
        "category": "entity",
        "score": 0.944,
        "type": "Organization"
      }, {
        "entity": "pollinator",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "francis crick",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "bumblebee",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "Health",
        "category": "topic",
        "score": 0.877104,
        "type": null
      }, {
        "entity": "jacob bronowski",
        "category": "tag",
        "score": 0.7,
        "type": null
      }],
      "topics": [{
        "id": 346825,
        "is_confirmed": false,
        "identifier": null,
        "name": "Health",
        "score": 0.877104,
        "category": "topic",
        "entity_type": null,
        "item_id": 13931,
        "extra": "{\"original\"=\u003e\"Health\"}",
        "created_at": "2015-07-29T23:08:44.708Z",
        "updated_at": "2015-07-29T23:08:44.708Z"
      }, {
        "id": 346824,
        "is_confirmed": false,
        "identifier": null,
        "name": "Health \u0026 Medical \u0026 Pharma",
        "score": 0.99,
        "category": "topic",
        "entity_type": null,
        "item_id": 13931,
        "extra": "{\"original\"=\u003e\"Health_Medical_Pharma\"}",
        "created_at": "2015-07-29T23:08:44.138Z",
        "updated_at": "2015-07-29T23:08:44.138Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/13931",
        "ui": "https://www.audiosear.ch/a/366b/a-buzzing-british-science-festival"
      },
      "highlights": []
    }, {
      "id": 13932,
      "title": "Commemorating 50 years of ABC Science. Part 2 of 2 - Death, deception and funny science.",
      "description": "Commemorating 50 years of ABC Science. Part 2 of 2 - Death, deception and funny science. ",
      "date_created": "2014-09-13",
      "date_added": "2015-07-21T00:24:01.377Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/commemorating-50-years-of-abc-science---part-2-of-2----death2c/5723670",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/commemorating-50-years-of-abc-science---part-2-of-2----death2c/5723670",
      "physical_location": "rss",
      "duration": 3230,
      "updated_at": "2015-07-29T23:14:56.136Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 13845,
        "mp3": "https://www.audiosear.ch/media/e3ba76d15c336f899c067140dcba5370/0/public/audio_file/13845/ssw_20140913.mp3",
        "ogg": "https://www.audiosear.ch/media/1bad794ba833aada8fc471048b67faf6/0/public/audio_file/13845/ssw_20140913.ogg",
        "duration": "00:53:50",
        "url_title": "commemorating-50-years-of-abc-science-part-2-of-2--death-deception-and-funny-science",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "Education",
        "category": "topic",
        "score": 1.0,
        "type": null
      }, {
        "entity": "Health \u0026 Medical \u0026 Pharma",
        "category": "topic",
        "score": 1.0,
        "type": null
      }, {
        "entity": "human behavior",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "deception",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "Religion \u0026 Belief",
        "category": "topic",
        "score": 0.85,
        "type": null
      }, {
        "entity": "Arts and Entertainment",
        "category": "topic",
        "score": 0.822878,
        "type": null
      }, {
        "entity": "ABC Science",
        "category": "entity",
        "score": 0.786,
        "type": "Organization"
      }],
      "topics": [{
        "id": 347032,
        "is_confirmed": false,
        "identifier": null,
        "name": "Arts and Entertainment",
        "score": 0.822878,
        "category": "topic",
        "entity_type": null,
        "item_id": 13932,
        "extra": "{\"original\"=\u003e\"Arts \u0026 Entertainment\"}",
        "created_at": "2015-07-29T23:14:56.061Z",
        "updated_at": "2015-07-29T23:14:56.061Z"
      }, {
        "id": 347031,
        "is_confirmed": false,
        "identifier": null,
        "name": "Religion \u0026 Belief",
        "score": 0.85,
        "category": "topic",
        "entity_type": null,
        "item_id": 13932,
        "extra": "{\"original\"=\u003e\"Religion_Belief\"}",
        "created_at": "2015-07-29T23:14:55.521Z",
        "updated_at": "2015-07-29T23:14:55.521Z"
      }, {
        "id": 347030,
        "is_confirmed": false,
        "identifier": null,
        "name": "Health \u0026 Medical \u0026 Pharma",
        "score": 1.0,
        "category": "topic",
        "entity_type": null,
        "item_id": 13932,
        "extra": "{\"original\"=\u003e\"Health_Medical_Pharma\"}",
        "created_at": "2015-07-29T23:14:54.984Z",
        "updated_at": "2015-07-29T23:14:54.984Z"
      }, {
        "id": 347029,
        "is_confirmed": false,
        "identifier": null,
        "name": "Education",
        "score": 1.0,
        "category": "topic",
        "entity_type": null,
        "item_id": 13932,
        "extra": "{\"original\"=\u003e\"Education\"}",
        "created_at": "2015-07-29T23:14:54.445Z",
        "updated_at": "2015-07-29T23:14:54.445Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/13932",
        "ui": "https://www.audiosear.ch/a/366c/commemorating-50-years-of-abc-science-part-2-of-2--death-deception-and-funny-science"
      },
      "highlights": []
    }, {
      "id": 13899,
      "title": "They wrote for children, but they also did science",
      "description": "Beatrix Potter – author and amateur pioneer mycologist\nPeering through the looking glass at Lewis Carroll\nA tribute to Terry Pratchett\nA nod to Dylan Thomas",
      "date_created": "2015-05-09",
      "date_added": "2015-07-21T00:23:06.532Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/they-wrote-for-children2c-but-they-also-did-science/6456508",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/they-wrote-for-children2c-but-they-also-did-science/6456508",
      "physical_location": "rss",
      "duration": 3229,
      "updated_at": "2015-07-29T23:06:30.718Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 13812,
        "mp3": "https://www.audiosear.ch/media/5096d612dfc0fba64a0e1d6441833e69/0/public/audio_file/13812/ssw_20150509.mp3",
        "ogg": "https://www.audiosear.ch/media/fecd4cf02657c192088a8233815ec071/0/public/audio_file/13812/ssw_20150509.ogg",
        "duration": "00:53:49",
        "url_title": "they-wrote-for-children-but-they-also-did-science",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "author",
        "category": "entity",
        "score": 1.0,
        "type": "Position"
      }, {
        "entity": "Beatrix Potter",
        "category": "entity",
        "score": 0.9685,
        "type": "Person"
      }, {
        "entity": "fabulist",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "beatrix potter",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "Terry Pratchett",
        "category": "entity",
        "score": 0.8895,
        "type": "Person"
      }, {
        "entity": "women in business",
        "category": "tag",
        "score": 0.7,
        "type": null
      }, {
        "entity": "terry pratchett",
        "category": "tag",
        "score": 0.7,
        "type": null
      }, {
        "entity": "lewis carroll",
        "category": "tag",
        "score": 0.7,
        "type": null
      }, {
        "entity": "Dylan Thomas",
        "category": "entity",
        "score": 0.606,
        "type": "Person"
      }, {
        "entity": "Human Interest",
        "category": "topic",
        "score": 0.554,
        "type": null
      }],
      "topics": [{
        "id": 346706,
        "is_confirmed": false,
        "identifier": null,
        "name": "Human Interest",
        "score": 0.554,
        "category": "topic",
        "entity_type": null,
        "item_id": 13899,
        "extra": "{\"original\"=\u003e\"Human Interest\"}",
        "created_at": "2015-07-29T23:06:30.647Z",
        "updated_at": "2015-07-29T23:06:30.647Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/13899",
        "ui": "https://www.audiosear.ch/a/364b/they-wrote-for-children-but-they-also-did-science"
      },
      "highlights": []
    }, {
      "id": 15064,
      "title": "Science",
      "description": "Science is supposed to be an unbiased way to uncover nature’s secrets. Through blinded experiments, rigorous peer review and replication – we’ve been told that by using the scientific method we’ll find trustworthy facts. But, with many scientific findings largely regarded as ‘wrong’, is science broken? To find out, science journalist Wendy Zukerman speaks to Dr. Neil deGrasse Tyson, Prof. Ivan Oransky, Prof. Barton Zwiebach, Ass. Prof. Alex Holcombe and Dr Alice Williamson.\n\nMore information\n\nBelieve it or not: how much can we rely on published data on potential drug targets? http://www.nature.com/nrd/journal/v10/n9/full/nrd3439-c1.html \n\nWhy Most Published Research Findings Are False  http://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124 \n\nFalse-Positive Psychology - Undisclosed Flexibility in Data Collection and Analysis Allows Presenting Anything as Significant\n(The Wiggle’ s Study) http://pss.sagepub.com/content/22/11/1359.full \n",
      "date_created": "2015-07-28",
      "date_added": "2015-07-28T12:03:55.197Z",
      "identifier": "tag:soundcloud,2010:tracks/216676696",
      "show_id": 527,
      "show_title": "Science Vs.",
      "digital_location": "https://soundcloud.com/science-vs/science",
      "physical_location": "rss",
      "duration": 1249,
      "updated_at": "2015-07-29T18:51:42.918Z",
      "network": "ABC Radio and Wendy Zukerman",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 14971,
        "mp3": "https://www.audiosear.ch/media/8b11a1f3a0ead01cf5e483837cbc34b7/0/public/audio_file/14971/216676696-science-vs-science.mp3",
        "ogg": "https://www.audiosear.ch/media/4a30e15c097c55a5746d599d0aca76d0/0/public/audio_file/14971/216676696-science-vs-science.ogg",
        "duration": "00:20:49",
        "url_title": "science",
        "listenlen": "medium"
      }],
      "entities": [{
        "entity": "Health \u0026 Medical \u0026 Pharma",
        "category": "topic",
        "score": 1.0,
        "type": null
      }, {
        "entity": "Barton Zwiebach",
        "category": "entity",
        "score": 0.8925,
        "type": "Person"
      }, {
        "entity": "Neil deGrasse Tyson",
        "category": "entity",
        "score": 0.846,
        "type": null
      }, {
        "entity": "scientific method",
        "category": "entity",
        "score": 0.737,
        "type": null
      }],
      "topics": [{
        "id": 335948,
        "is_confirmed": false,
        "identifier": null,
        "name": "Health \u0026 Medical \u0026 Pharma",
        "score": 1.0,
        "category": "topic",
        "entity_type": null,
        "item_id": 15064,
        "extra": "---\noriginal: Health_Medical_Pharma\n",
        "created_at": "2015-07-29T18:51:42.770Z",
        "updated_at": "2015-07-29T18:51:42.770Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/544431692e0fcda6ef2ab46435afc652/0/public/image_file/14425/mza_3035491909921201757-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/50b2c14aadda34b07cb449b8bd711819/0/thumb/image_file/14425/mza_3035491909921201757-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/15064",
        "ui": "https://www.audiosear.ch/a/3ad8/science"
      },
      "highlights": []
    }, {
      "id": 13898,
      "title": "Nature celebrates Australian science",
      "description": "New rules muzzle UK government scientists\nCutting down on food waste\nGraphene - part of the age of new materials\nNew baby gorilla for Melbourne Zoo\nMummies reveal diet, health, lifestyle of ancient humans\nNew approach for heart disease therapy\nAustralian post docs in Asia - Part 3",
      "date_created": "2015-05-16",
      "date_added": "2015-07-21T00:23:04.774Z",
      "identifier": "http://www.abc.net.au/radionational/programs/scienceshow/nature-celebrates-australian-science/6473634",
      "show_id": 635,
      "show_title": "The Science Show",
      "digital_location": "http://www.abc.net.au/radionational/programs/scienceshow/nature-celebrates-australian-science/6473634",
      "physical_location": "rss",
      "duration": 3230,
      "updated_at": "2015-07-29T22:56:22.727Z",
      "network": "ABC Radio National",
      "categories": [{
        "id": 64,
        "parent_id": 10,
        "name": "Natural Sciences",
        "name_lc": "natural sciences"
      }, {
        "id": 65,
        "parent_id": 10,
        "name": "Science \u0026 Medicine",
        "name_lc": "science \u0026 medicine"
      }],
      "audio_files": [{
        "id": 13811,
        "mp3": "https://www.audiosear.ch/media/9932c62512f67cf432de453dedb41e67/0/public/audio_file/13811/ssw_20150516.mp3",
        "ogg": "https://www.audiosear.ch/media/c0a6d91c49916b0cbecc64286ef7d43b/0/public/audio_file/13811/ssw_20150516.ogg",
        "duration": "00:53:50",
        "url_title": "nature-celebrates-australian-science",
        "listenlen": "long"
      }],
      "entities": [{
        "entity": "Health \u0026 Medical \u0026 Pharma",
        "category": "topic",
        "score": 1.0,
        "type": null
      }, {
        "entity": "food waste",
        "category": "entity",
        "score": 1.0,
        "type": "Industry Term"
      }, {
        "entity": "heart disease",
        "category": "entity",
        "score": 1.0,
        "type": "Medical Condition"
      }, {
        "entity": "Environment",
        "category": "topic",
        "score": 0.932603,
        "type": null
      }, {
        "entity": "graphene",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "ape",
        "category": "tag",
        "score": 0.9,
        "type": null
      }, {
        "entity": "Health",
        "category": "topic",
        "score": 0.849673,
        "type": null
      }, {
        "entity": "gorilla",
        "category": "tag",
        "score": 0.7,
        "type": null
      }, {
        "entity": "mummy",
        "category": "tag",
        "score": 0.7,
        "type": null
      }, {
        "entity": "human",
        "category": "tag",
        "score": 0.7,
        "type": null
      }],
      "topics": [{
        "id": 346370,
        "is_confirmed": false,
        "identifier": null,
        "name": "Health",
        "score": 0.849673,
        "category": "topic",
        "entity_type": null,
        "item_id": 13898,
        "extra": "{\"original\"=\u003e\"Health\"}",
        "created_at": "2015-07-29T22:56:22.657Z",
        "updated_at": "2015-07-29T22:56:22.657Z"
      }, {
        "id": 346369,
        "is_confirmed": false,
        "identifier": null,
        "name": "Environment",
        "score": 0.932603,
        "category": "topic",
        "entity_type": null,
        "item_id": 13898,
        "extra": "{\"original\"=\u003e\"Environment\"}",
        "created_at": "2015-07-29T22:56:22.079Z",
        "updated_at": "2015-07-29T22:56:22.079Z"
      }, {
        "id": 346368,
        "is_confirmed": false,
        "identifier": null,
        "name": "Health \u0026 Medical \u0026 Pharma",
        "score": 1.0,
        "category": "topic",
        "entity_type": null,
        "item_id": 13898,
        "extra": "{\"original\"=\u003e\"Health_Medical_Pharma\"}",
        "created_at": "2015-07-29T22:56:21.506Z",
        "updated_at": "2015-07-29T22:56:21.506Z"
      }],
      "image_urls": {
        "full": "https://www.audiosear.ch/media/7d3a8abddec3935e6920204ed60f0345/0/public/image_file/14555/mza_305391382982278895-600x600-75.jpg",
        "thumb": "https://www.audiosear.ch/media/f8c4230515f889763c2e2cb1895d3287/0/thumb/image_file/14555/mza_305391382982278895-600x600-75.jpg"
      },
      "urls": {
        "self": "https://www.audiosear.ch/api/episodes/13898",
        "ui": "https://www.audiosear.ch/a/364a/nature-celebrates-australian-science"
      },
      "highlights": []
    }]
  }
]

$scope.podcasts = $scope.json[0].results

})

.controller('playerCtrl', function($scope) {
  $scope.myTrack = {
    url: "http://robbbenson.com/01%20Angel.mp3",
    artist: "timmy mallet",
    title: "wack aday",
    art: "http://images.askmen.com/top_10/celebrity/breakfast-tv-presenters_423192.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }

})

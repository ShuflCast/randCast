describe('homeCtrl', function() {
  beforeEach(module('starter'));

  var ctrl;
  var $scope;

  beforeEach(module(function ($provide) {
    $scope = {}
    $provide.value('$scope', $scope);
  }));

  beforeEach(inject(function($controller) {
    ctrl = $controller('homeCtrl');
  }));

  beforeEach(function() {
    spyOn($scope, 'showAlert');
  });

  it('initializes with an undefined search term', function() {
    expect($scope.search_term).toBeUndefined();
  })

  it('responds to doSearch', function() {
    expect($scope.doSearch).toBeDefined();
  })

  it('responds to feelingLucky', function() {
    expect($scope.feelingLucky).toBeDefined();
  })

  it('responds to setGenre', function() {
    expect($scope.setGenre).toBeDefined();
  })

  it('should raise an error if there is no search term upon searching', function() {
    $scope.doSearch();
    expect($scope.showAlert).toHaveBeenCalled();
  });

});

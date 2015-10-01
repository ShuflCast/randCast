describe('resultsCtrl', function() {
  beforeEach(module('starter'));

  var ctrl;
  var $scope;

  beforeEach(module(function ($provide) {
    $scope = {}
    $provide.value('$scope', $scope);
  }));

  beforeEach(inject(function($controller) {
    ctrl = $controller('resultsCtrl');
  }));

  it('responds to setPlayer', function() {
    expect($scope.setPlayer).toBeDefined();
  })

  it('responds to doRefresh', function() {
    expect($scope.doRefresh).toBeDefined();
  })
});

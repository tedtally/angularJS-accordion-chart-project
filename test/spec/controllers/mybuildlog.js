'use strict';

describe('Controller: MybuildlogCtrl', function () {

  // load the controller's module
  beforeEach(module('teamBuildDashboardApp'));

  var MybuildlogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MybuildlogCtrl = $controller('MybuildlogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MybuildlogCtrl.awesomeThings.length).toBe(3);
  });
});

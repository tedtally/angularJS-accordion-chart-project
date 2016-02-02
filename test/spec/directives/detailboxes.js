'use strict';

describe('Directive: detailBoxes', function () {

  // load the directive's module
  beforeEach(module('teamBuildDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<detail-boxes></detail-boxes>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the detailBoxes directive');
  }));
});

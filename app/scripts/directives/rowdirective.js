(function() {
    'use strict';

    var app = angular.module('teamBuildDashboardApp');

    app.directive('rowDirective', function(){
      var directive = {
        restrict: 'E',
        scope: false,
        templateUrl: '../views/recorddisplay.html'
        };
      return directive;
    });

})();    
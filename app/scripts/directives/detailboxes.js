(function() {
    'use strict';

    var app = angular.module('teamBuildDashboardApp');

    app.directive('detailBoxes', function(){
      var directive = {
        restrict: 'E',
        scope: false,
        templateUrl: '../views/detailboxesdisplay.html'
        };
      return directive;
    });

})();   
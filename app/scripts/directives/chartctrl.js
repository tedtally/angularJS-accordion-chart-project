'use strict';

/**
 * @ngdoc directive
 * @name teamBuildDashboardApp.directive:chartctrl
 * @description
 * # chartctrl
 */
(function() {
    'use strict';

    var app = angular.module('teamBuildDashboardApp');

    app.directive('chartCtrl', function(){
      var directive = {
        restrict: 'E',
        scope: false,
 		templateUrl: '../views/chartctrl.html'
        };
      return directive;
    });

})();    

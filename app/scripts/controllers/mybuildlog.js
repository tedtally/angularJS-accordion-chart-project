(function () {
    'use strict';
    var controllerId = 'MybuildlogCtrl';
    angular.module('teamBuildDashboardApp').controller(controllerId, ['common','$http','$scope',buildlog]);

    function buildlog(common,$http) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        
        vm.messageCount = 0;
        
        vm.builds = [];
        vm.title = 'Changelist/Builds';
        vm.myVar= false;
      //vm.logs = []; 
      
        vm.exampleData = [
                {
                    key: "One",
                    y: 5
                },
                {
                    key: "Two",
                    y: 2
                },
                {
                    key: "Three",
                    y: 9
                },
                {
                    key: "Four",
                    y: 7
                },
                {
                    key: "Five",
                    y: 4
                },
                {
                    key: "Six",
                    y: 3
                },
                {
                    key: "Seven",
                    y: 9
                }
            ];

    vm.width = 100;
    vm.height = 100;



      vm.css= {
        Running: 'lead2_Running',
        Pending: 'lead2_Pending',
        Rejected: 'lead2_Rejected',
        Completed: 'lead2_Completed'
      };
      
  
  
        function checkCSS(status) {
          alert(status);
          return 'lead2_'+status;
        }
        
        activate();
        
        function activate() {
            var promises = [getLogData(), getCSSClasses()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }


        function getLogData() {
           $http({
                url: 'scripts/models/data.json',
                method: "GET",
                headers: { 'Content-Type': "application/json" }
            })
            .success (
              function(data){
               // console.log(data);
        				 return vm.logs = data;
        			})
        		.error(
             function (error) {
                 //reject('there was an error with saving the data' + error);
                 alert('error retrieving data: ' + error);
             });
        }

        function getCSSClasses()
        {
          return vm.css;
        }
      
    
   vm.xFunction = function() {
      return function(d) {
        return d.key;
      };
    };

   vm.yFunction = function() {
      return function(d) {
        return d.y;
      };
    };
    vm.descriptionFunction = function() {
      return function(d) {
        return d.key;
      }
    };

    }
})();
//var controllerId = 'MybuildlogCtrl';
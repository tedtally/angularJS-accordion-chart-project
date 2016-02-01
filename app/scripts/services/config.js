(function () {
    'use strict';

    var app = angular.module('teamBuildDashboardApp');

    // Configure Toastr
    //toastr.options.timeOut = 4000;
   // toastr.options.positionClass = 'toast-bottom-right';

    // For use with the HotTowel-Angular-Breeze add-on that uses Breeze
    //var remoteServiceName = 'breeze/Breeze';

    var keyCodes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        del: 46
    };

    var events = {
         controllerActivateSuccess: 'controller.activateSuccess',
      //  hasChangesChanged: 'datacontext.hasChangesChanged',
      //  entitiesChanged: 'datacontext.entitiesChanged',
        spinnerToggle: 'spinner.toggle',
        storage: {
            error: 'store.error',
            storeChanged: 'store.changed',
            wipChanged: 'wip.changed'
        }
    };

    var config = {
        appErrorPrefix: '[Application Error] ', //Configure the exceptionHandler decorator
        docTitle: 'System Changelist/Build : ',
        events: events,
        //remoteServiceName: remoteServiceName,
        keyCodes: keyCodes,
        version: '3.0.0'
    };

    app.value('config', config);
    
    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);
    
    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
    }]);
    //#endregion

    app.config(function ($httpProvider) {
        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;

        //Remove the header used to identify ajax call  that would prevent CORS from working
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

})();
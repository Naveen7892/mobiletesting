(function() {
'use strict';

    angular
        .module('testing.pushnotification')
        .factory('PushNotificationService', PushNotificationService);

    PushNotificationService.inject = [];
    function PushNotificationService() {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();
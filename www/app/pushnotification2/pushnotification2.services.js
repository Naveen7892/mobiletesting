(function() {
'use strict';

    angular
        .module('testing.pushnotification2')
        .factory('PushNotification2Service', PushNotification2Service);

    PushNotification2Service.inject = ['$q'];
    function PushNotification2Service($q) {
        var service = {
            registerPush: registerPushFn
        };

        return service;

        ////////////////
        function registerPushFn() { 
            var q = $q.defer();

            q.resolve(true);
            return q.promise;
        }
    }
})();
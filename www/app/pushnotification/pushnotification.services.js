(function() {
'use strict';

    angular
        .module('testing.pushnotification')
        .factory('PushNotificationService', PushNotificationService);

    PushNotificationService.inject = ['$q', '$ionicPush'];
    function PushNotificationService($q, $ionicPush) {
        var service = {
            registerPush: registerPushFn
        };

        
        
        return service;

        ////////////////
        function registerPushFn() { 
            var q = $q.defer();

            ionic.Platform.ready(function() {
                console.log("Registering");
                $ionicPush.register()
                .then(
                    function(t) {
                        return $ionicPush.saveToken(t);
                    }
                )
                .then(
                    function(t) {
                        console.log('Token saved:', t.token);
                        q.resolve(t.token);
                    }
                );
            });

            return q.promise;
        }
    }
})();
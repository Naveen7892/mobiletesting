(function() {
    'use strict';

    angular.module('testing.pushnotification')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.pushnotification', {
                url: '/pushnotification',
                views: {
                    'testingContent': {
                        templateUrl: 'app/pushnotification/pushnotification.html',
                        controller: 'PushNotificationController'
                    }
                }
            })
    }
})();
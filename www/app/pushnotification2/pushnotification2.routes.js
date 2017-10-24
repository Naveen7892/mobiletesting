(function() {
    'use strict';

    angular.module('testing.pushnotification2')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.pushnotification2', {
                url: '/pushnotification2',
                views: {
                    'testingContent': {
                        templateUrl: 'app/pushnotification2/pushnotification2.html',
                        controller: 'PushNotification2Controller'
                    }
                }
            })
    }
})();
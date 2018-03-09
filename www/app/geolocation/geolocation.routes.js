(function() {
    'use strict';

    angular.module('testing.geolocation')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.geolocation', {
                url: '/geolocation',
                views: {
                    'testingContent': {
                        templateUrl: 'app/geolocation/geolocation.html',
                        controller: 'GeolocationController as gc'
                    }
                }
            });
    }
})();
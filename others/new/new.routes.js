(function() {
    'use strict';

    angular.module('Module')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('routes', {
                url: '/routes',
                views: {
                    'routesContent': {
                        templateUrl: 'app/routes/routes.html',
                        controller: 'RoutesController'
                    }
                }
            });
    }
})();
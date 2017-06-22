(function() {
    'use strict';

    angular.module('testing.d3')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.d3', {
                url: '/d3',
                views: {
                    'testingContent': {
                        templateUrl: 'app/d3/d3.html',
                        controller: 'D3Controller'
                    }
                }
            });
    }
})();
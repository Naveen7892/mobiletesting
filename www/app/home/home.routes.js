(function() {
    'use strict';

    angular.module('testing')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.home', {
                url: '/home',
                views: {
                    'testingContent': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController'
                    }
                }
            })
    }
})();
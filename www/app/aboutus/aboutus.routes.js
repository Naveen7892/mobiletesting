(function() {
    'use strict';

    angular.module('testing.aboutus')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.aboutus', {
                url: '/aboutus',
                views: {
                    'testingContent': {
                        templateUrl: 'app/aboutus/aboutus.html',
                        controller: 'AboutusController'
                    }
                }
            })
    }
})();
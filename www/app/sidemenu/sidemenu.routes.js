(function() {
    'use strict';

    angular.module('testing')
    .config(configure)

    configure.$inject = [
        '$stateProvider'
    ];

    function configure($stateProvider) {
        $stateProvider
            $stateProvider
            .state('testing', {
                url: '/testing',
                abstract: true,
                templateUrl: 'app/sidemenu/sidemenu.html',
                controller: 'SidemenuController'
            })
        ;
    }
})();
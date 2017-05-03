(function() {
    'use strict';

    angular.module('testing')
    .config(configure)

    configure.$inject = ['$urlRouterProvider', '$ionicConfigProvider'];
    function configure($urlRouterProvider, $ionicConfigProvider) {
        $urlRouterProvider.otherwise('/testing/home');
    }
})();
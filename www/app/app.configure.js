(function() {
    'use strict';

    angular.module('testing')
    .config(configure)

    configure.$inject = ['$urlRouterProvider', '$ionicConfigProvider'];
    function configure($urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.views.transition('none');
        $ionicConfigProvider.views.maxCache(15);
        $ionicConfigProvider.views.forwardCache(true);
        $ionicConfigProvider.views.swipeBackEnabled(false);
        $ionicConfigProvider.scrolling.jsScrolling(true);

        $urlRouterProvider.otherwise('/testing/home');
    }
})();
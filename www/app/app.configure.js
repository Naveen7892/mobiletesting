(function() {
    'use strict';

    angular.module('testing')
    .config(configure)

    configure.$inject = ['$urlRouterProvider', '$ionicConfigProvider', '$compileProvider'];
    function configure($urlRouterProvider, $ionicConfigProvider, $compileProvider) {

        $ionicConfigProvider.views.transition('none');
        $ionicConfigProvider.views.maxCache(15);
        $ionicConfigProvider.views.forwardCache(true);
        $ionicConfigProvider.views.swipeBackEnabled(false);

        $ionicConfigProvider.tabs.position('bottom');

        $ionicConfigProvider.scrolling.jsScrolling(true);
        
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.icon('ion-arrow-left-c');
        $ionicConfigProvider.backButton.text('');
        
        $ionicConfigProvider.navBar.alignTitle('center');


        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|localhost|http):/);

        $urlRouterProvider.otherwise('/testing/home');
    }
})();
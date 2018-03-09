(function() {
    'use strict';

    angular.module('testing')
    .config(configure)

    configure.$inject = ['$urlRouterProvider', '$ionicConfigProvider', '$compileProvider', '$ionicCloudProvider'];
    function configure($urlRouterProvider, $ionicConfigProvider, $compileProvider, $ionicCloudProvider) {

        $ionicConfigProvider.views.transition('none');
        $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.views.forwardCache(true);
        $ionicConfigProvider.views.swipeBackEnabled(false);

        $ionicConfigProvider.tabs.position('bottom');

        $ionicConfigProvider.scrolling.jsScrolling(true);
        
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.icon('ion-arrow-left-c');
        $ionicConfigProvider.backButton.text('');
        
        $ionicConfigProvider.navBar.alignTitle('center');

        //$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|localhost|http):/);
        //$compileProvider.imgSrcSanitizationWhitelist(/^\s*(http|https|file|blob|cdvfile|content):|data:image\//);

        // Push notification init
        $ionicCloudProvider.init({
            "core": {
                "app_id": "ff959a3d"
                // "app_id": "ad24e3e8"
            },
            "push": {
                "sender_id": "1041939565456",
                "pluginConfig": {
                    "ios": {
                        "badge": true,
                        "sound": true
                    },
                    "android": {
                        "iconColor": "#343434"
                    }
                }
            }
        });

        $urlRouterProvider.otherwise('/testing/home');
    }
})();
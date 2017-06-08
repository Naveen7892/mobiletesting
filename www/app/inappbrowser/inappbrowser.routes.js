(function() {
    'use strict';

    angular.module('testing.inappbrowser')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.inappbrowser', {
                url: '/inappbrowser',
                views: {
                    'testingContent': {
                        templateUrl: 'app/inappbrowser/inappbrowser.html',
                        controller: 'InAppBrowserController as iab'
                    }
                }
            })
    }
})();
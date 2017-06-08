(function() {
    'use strict';

    angular.module('testing.emailcomposer')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.emailcomposer', {
                url: '/emailcomposer',
                views: {
                    'testingContent': {
                        templateUrl: 'app/emailcomposer/emailcomposer.html',
                        controller: 'EmailComposerController as ecc'
                    }
                }
            })
    }
})();
(function() {
    'use strict';

    angular.module('testing.imagemodal')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.imagemodal', {
                url: '/routes',
                views: {
                    'testingContent': {
                        templateUrl: 'app/imagemodal/imagemodal.html',
                        controller: 'ImageModalController as imc'
                    }
                }
            });
    }
})();
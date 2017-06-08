(function() {
    'use strict';

    angular.module('testing.imagepicker')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.imagepicker', {
                url: '/imagepicker',
                views: {
                    'testingContent': {
                        templateUrl: 'app/imagepicker/imagepicker.html',
                        controller: 'ImagePickerController'
                    }
                }
            })
    }
})();
(function() {
    'use strict';

    angular.module('testing.camera')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.camera', {
                url: '/camera',
                views: {
                    'testingContent': {
                        templateUrl: 'app/camera/camera.html',
                        controller: 'CameraController as cc'
                    }
                }
            })
    }
})();
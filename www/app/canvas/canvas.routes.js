(function() {
    'use strict';

    angular.module('testing.canvas')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.canvas', {
                url: '/canvas',
                views: {
                    'testingContent': {
                        templateUrl: 'app/canvas/canvas.html',
                        controller: 'CanvasController as cc'
                    }
                }
            })
    }
})();
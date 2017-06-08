(function() {
'use strict';

    angular
        .module('testing.canvas')
        .factory('CanvasService', CanvasService);

    CanvasService.inject = [];
    function CanvasService() {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();
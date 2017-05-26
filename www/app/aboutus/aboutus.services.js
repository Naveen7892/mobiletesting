(function() {
'use strict';

    angular
        .module('testing.aboutus')
        .factory('AboutusService', AboutusService);

    AboutusService.inject = [];
    function AboutusService() {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();
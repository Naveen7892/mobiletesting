(function() {
'use strict';

    angular
        .module('testing.geolocation')
        .factory('GeolocationService', GeolocationService);

    GeolocationService.inject = ['dependency1'];
    function GeolocationService(dependency1) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();
(function() {
'use strict';

    angular
        .module('testing.d3')
        .factory('D3Service', D3Service);

    D3Service.inject = [];
    function D3Service(d) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();
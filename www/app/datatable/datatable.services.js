(function() {
'use strict';

    angular
        .module('testing.datatable')
        .factory('DatatableFactory', DatatableFactory);

    DatatableFactory.inject = [];
    function DatatableFactory() {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();
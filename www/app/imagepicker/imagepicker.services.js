(function() {
'use strict';

    angular
        .module('testing.imagepicker')
        .factory('ImagePickerService', ImagePickerService);

    ImagePickerService.inject = [];
    function ImagePickerService() {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();
(function() {
'use strict';

    angular
        .module('testing.imagemodal')
        .factory('ImageModalService', ImageModalService);

    ImageModalService.inject = ['$q', '$cordovaImagePicker','ImagePickerService'];
    function ImageModalService($q, $cordovaImagePicker, ImagePickerService) {
        var service = {
            // openImagePicker: ImagePickerService.openImagePickerFn
            openImagePicker: openImagePickerFn
        };
        
        var options = {
            maximumImagesCount: 5,
            width: 800,
            height: 800,
            quality: 80
        };

        return service;

        ////////////////

        function openImagePickerFn() {
            var q = $q.defer();

            $cordovaImagePicker.getPictures(options).then(
                function (results) {
                    for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                    }
                    q.resolve(results);
                }, 
                function(error) {
                    // error getting photos
                    q.reject(error);
                }
            );

            return q.promise;
         }
    }
})();
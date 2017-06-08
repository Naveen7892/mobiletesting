(function() {
'use strict';

    angular
        .module('testing.camera')
        .factory('CameraService', CameraService);

    CameraService.inject = ['$cordovaCamera', '$q'];
    function CameraService($cordovaCamera, $q) {
        var service = {
            getPicture: getPictureFn,
            getPictureURI: getPictureURIFn,
            getPictureFromPhotoLibrary: getPictureFromPhotoLibraryFn,
            getPictureFromSavedPhotoAlbum: getPictureFromSavedPhotoAlbumFn
        };

        var options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL, // or FILE_URI(android) or NATIVE_URI(ios)
            sourceType: Camera.PictureSourceType.CAMERA, // or PHOTOLIBRARY or SAVEDPHOTOALBUM
            allowEdit: true, // setting true is not recommended for android
            encodingType: Camera.EncodingType.JPEG, // or PNG
            targetWidth: 500,
            targetHeight: 500,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
        };

        var destType = "";
        if(ionic.Platform.platform() === 'android') {
            destType = Camera.DestinationType.FILE_URI;
        } else if(ionic.Platform.platform() === 'ios' || ionic.Platform.platform() === 'ipad') {
            destType = Camera.DestinationType.NATIVE_URI;
        }

        var optionsRetrieveURI = {
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: destType
        };

        var optionsLibrary = {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: destType
        };

        var optionsAlbum = {
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: destType
        };

        
        return service;

        ////////////////
        function getPictureFn() {
            var q = $q.defer();

            ionic.Platform.ready(function() {
                $cordovaCamera.getPicture(options).then(
                    function(imageData) {
                        console.log(imageData);
                        q.resolve(imageData);
                    },
                    function(err) {
                        console.log(err);
                        q.reject(err);
                    }
                );
            });

            return q.promise;
        }

        function getPictureURIFn() {
            var q = $q.defer();

            ionic.Platform.ready(function() {
                $cordovaCamera.getPicture(optionsRetrieveURI).then(
                    function(imageURI) {
                        console.log(imageURI);
                        q.resolve(imageURI);
                    },
                    function(err) {
                        console.log(err);
                        q.reject(err);
                    }
                );
            });

            return q.promise;
        }

        function getPictureFromPhotoLibraryFn() {
            var q = $q.defer();

            ionic.Platform.ready(function() {
                $cordovaCamera.getPicture(optionsLibrary).then(
                    function(imageURI) {
                        console.log(imageURI);
                        q.resolve(imageURI);
                    },
                    function(err) {
                        console.log(err);
                        q.reject(err);
                    }
                );
            });

            return q.promise;
        }

        function getPictureFromSavedPhotoAlbumFn() {
            var q = $q.defer();

            ionic.Platform.ready(function() {
                $cordovaCamera.getPicture(optionsAlbum).then(
                    function(imageURI) {
                        console.log(imageURI);
                        q.resolve(imageURI);
                    },
                    function(err) {
                        console.log(err);
                        q.reject(err);
                    }
                );
            });

            return q.promise;
        }
    }
})();
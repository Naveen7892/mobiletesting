//  controllers
(function() {
'use strict';

    angular
        .module('testing.camera')
        .controller('CameraController', CameraController);

    CameraController.inject = ['CameraService'];
    function CameraController(CameraService) {
        var vm = this;
        
        vm.getPicture = getPictureFn;
        vm.getPictureURI = getPictureURIFn;
        vm.getPictureFromPhotoLibrary = getPictureFromPhotoLibraryFn;
        vm.getPictureFromSavedPhotoAlbum = getPictureFromSavedPhotoAlbumFn;

        activate();

        ////////////////

        function activate() { }

        function getPictureFn() {
            CameraService.getPicture().then(
                function(imageData) {
                    var image = document.getElementById("image");
                    image.src = "data:image/jpeg;base64," +  imageData;
                },
                function(err) {

                }
            )
        }

        function getPictureURIFn() {
            CameraService.getPictureURI().then(
                function(imageURI) {
                    console.log(imageURI);
                    var image = document.getElementById("image");
                    image.src = imageURI;
                    var imageLocation = document.getElementById("imageLocation");
                    imageLocation.innerText = imageURI;
                },
                function(err) {

                }
            )
        }

        function getPictureFromPhotoLibraryFn() {
            CameraService.getPictureFromPhotoLibrary().then(
                function(imageURI) {
                    console.log(imageURI);
                    var image = document.getElementById("image");
                    image.src = imageURI;
                    var imageLocation = document.getElementById("imageLocation");
                    imageLocation.innerText = imageURI;
                },
                function(err) {

                }
            )
        }

        function getPictureFromSavedPhotoAlbumFn() {
            CameraService.getPictureFromSavedPhotoAlbum().then(
                function(imageURI) {
                    console.log(imageURI);
                    var image = document.getElementById("image");
                    image.src = imageURI;
                    var imageLocation = document.getElementById("imageLocation");
                    imageLocation.innerText = imageURI;
                },
                function(err) {

                }
            )
        }
    }
})();
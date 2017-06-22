//  controllers
(function() {
'use strict';

    angular
        .module('testing.imagepicker')
        .controller('ImagePickerController', ImagePickerController);

    ImagePickerController.inject = ['ImagePickerService'];
    function ImagePickerController(ImagePickerService) {
        var vm = this;
        
        vm.openImagePicker = openImagePickerFn;
        activate();

        ////////////////

        function activate() { }

        function openImagePickerFn() {
            ImagePickerService.openImagePicker().then(
                function(images) {
                    console.log(images);
                    var imageDiv = document.getElementById('imagePicker');
                    var newElements = "";
                    for(var i = 0; i < images.length; i++) {
                        newElements = document.createElement('img');
                        // newElements.src = "data:image/png;base64," + images[i];
                        newElements.src = images[i];
                        imageDiv.appendChild(newElements);
                    }
                },
                function(err) {
                    console.log(err);
                }
            )
        }
    }
})();
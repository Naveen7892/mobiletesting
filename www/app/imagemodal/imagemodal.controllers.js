//  controllers
(function() {
'use strict';

    angular
        .module('testing.imagemodal')
        .controller('ImageModalController', ImageModalController);

    ImageModalController.inject = ['$scope', '$ionicModal', 'ImageModalService'];
    function ImageModalController($scope, $ionicModal, ImageModalService) {
        var vm = this;
        vm.images = [];

        vm.openImage = openImageFn;

        $ionicModal.fromTemplateUrl('app/imagemodal/imagemodal-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });

        // Execute action on hide modal
        $scope.$on('modal.hide', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

        $scope.$on('modal.shown', function() {
            console.log('Modal is shown!');
        });

        activate();

        ////////////////

        $scope.$on('$ionicView.afterEnter', function() {
            ImageModalService.openImagePicker().then(
                function(images) {
                    console.log(JSON.stringify(images));
                    vm.images = images;
                }, function(err) {
                    console.log(err);
                }
            );
        });

        function activate() { }

        function openImageFn(image, event) {

        }
    }
})();
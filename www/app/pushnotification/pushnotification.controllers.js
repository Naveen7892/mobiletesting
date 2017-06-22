//  controllers
(function() {
'use strict';

    angular
        .module('testing.pushnotification')
        .controller('PushNotificationController', PushNotificationController);

    PushNotificationController.inject = ['$scope', 'PushNotificationService'];
    function PushNotificationController($scope, PushNotificationService) {
        var vm = this;
        
        vm.registerPush = registerPushFn;

        activate();

        ////////////////

        $scope.$on('cloud:push:notification', function(event, data) {
            var msg = data.message;
            alert(msg.title + ': ' + msg.text);
        });

        function activate() { 

            PushNotificationService.registerPush().then(
                function(registered) {
                    console.log(registered);
                },
                function(notRegistered) {
                    console.log(notRegistered);
                }
            );

        }

        function registerPushFn() {

        }
    }
})();
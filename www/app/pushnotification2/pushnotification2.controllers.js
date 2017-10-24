//  controllers
(function() {
'use strict';

    angular
        .module('testing.pushnotification2')
        .controller('PushNotification2Controller', PushNotification2Controller);

    PushNotification2Controller.inject = ['$scope', 'PushNotification2Service'];
    function PushNotification2Controller($scope, PushNotification2Service) {
        var vm = this;
        
        vm.registerPush = registerPushFn;

        activate();

        ////////////////

        function activate() {

        }

        function registerPushFn() {

        }
    }
})();
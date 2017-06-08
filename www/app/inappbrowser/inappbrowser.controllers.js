//  controllers
(function() {
'use strict';

    angular
        .module('testing.inappbrowser')
        .controller('InAppBrowserController', InAppBrowserController);

    InAppBrowserController.inject = ['$scope', 'InAppBrowserService'];
    function InAppBrowserController($scope, InAppBrowserService) {
        var vm = this;
        
        vm.browserURL = "";
        vm.openBrowser1 = function() {
            console.log("Opening browser!");
            if(!vm.browserURL) {
                console.log("Enter URL please!");
                return;
            }

            InAppBrowserService.openBrowser1(vm.browserURL);
        };

        vm.openBrowser2 = function() {
            console.log("Opening browser!");
            if(!vm.browserURL) {
                console.log("Enter URL please!");
                return;
            }

            InAppBrowserService.openBrowser2(vm.browserURL);
        };

        vm.openBrowser3 = function() {
            console.log("Opening browser!");
            if(!vm.browserURL) {
                console.log("Enter URL please!");
                return;
            }

            InAppBrowserService.openBrowser3(vm.browserURL);
        };
        activate();

        ////////////////

        function activate() { }

        $scope.$on('$ionicView.beforeEnter', function(event, data) {
            // console.log("Opening browser!");
            // InAppBrowserService.openBrowser();
            // console.log("Opening browser!");
        });
    }
})();
(function() {
'use strict';

    angular
        .module('testing.home')
        .controller('HomeController', HomeController);

        HomeController.inject = ['$scope'];
        function HomeController($scope) {
            var vm = this;

            activate();

            ////////////////
            function activate() {
                
            }
        }
})();
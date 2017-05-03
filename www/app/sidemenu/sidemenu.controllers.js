(function() {
'use strict';

    angular
        .module('testing.sidemenu')
        .controller('SidemenuController', SidemenuController);

        SidemenuController.inject = ['$scope'];
        function SidemenuController($scope) {
            var vm = this;

            activate();

            ////////////////

            function activate() { }
        }
})();
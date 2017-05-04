//  controllers
(function() {
'use strict';

    angular
        .module('Module')
        .controller('ControllerController', ControllerController);

    ControllerController.inject = ['dependency1'];
    function ControllerController(dependency1) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();
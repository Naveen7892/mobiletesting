//  controllers
(function() {
'use strict';
    
    angular
        .module('testing.aboutus')
        .controller('AboutusController', AboutusController);

    AboutusController.inject = ['$scope'];
    function AboutusController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }

        // To enable back button for aboutus page, but click not working
        // $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        //     console.log("Aboutus");
        //     console.log(viewData);
            
        //     viewData.enableBack = true;
        //     viewData.direction = "testing.aboutus";
        // });
    }
})();
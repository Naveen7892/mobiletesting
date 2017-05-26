//  controllers
(function() {
'use strict';

    angular
        .module('testing.barcode')
        .controller('BarcodeController', BarcodeController);

    BarcodeController.inject = ['$q', 'BarcodeService'];
    function BarcodeController($q, BarcodeService) {
        var vm = this;
        vm.barcodeData = "Empty";

        vm.readBarcode = readBarcodeFn;

        activate();

        ////////////////
        function activate() { }

        function readBarcodeFn() {
            console.log("Barcode called");
            
            var q = $q.defer();
            BarcodeService.readData().then(
                function(data) {
                    vm.barcodeData = data;
                    q.resolve(data);
                },
                function(noData) {
                    vm.barcodeData = "Invalid data";
                    q.reject(noData);
                }
            );

            return q.promise;
        };
    }
})();
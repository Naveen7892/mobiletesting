(function() {
'use strict';

    angular
        .module('testing.barcode')
        .factory('BarcodeService', BarcodeService);

    BarcodeService.inject = ['$ionicPlatform', '$cordovaBarcodeScanner', '$q'];
    function BarcodeService($ionicPlatform, $cordovaBarcodeScanner, $q) {
        var service = {
            readData: readDataFn
        };
        
        return service;

        ////////////////
        function readDataFn() { 
            var q = $q.defer();

            $ionicPlatform.ready(function() {
                var scanOptions = {
                    // preferFrontCamera : true, // iOS and Android
                    // showFlipCameraButton : true, // iOS and Android
                    // showTorchButton : true, // iOS and Android
                    // torchOn: true, // Android, launch with the torch switched on (if available)
                    // prompt : "Place a barcode inside the scan area", // Android
                    // resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                    // formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                    // orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                    // disableAnimations : true, // iOS
                    // disableSuccessBeep: false // iOS
                    showTorchButton: true,
                    showFlipCameraButton: true,
                    formats: "QR_CODE,DATA_MATRIX,CODE_39,CODE_128",
                };

                $cordovaBarcodeScanner
                    .scan()
                    .then(
                        function(barcodeData) {
                            console.log(barcodeData);
                            q.resolve(barcodeData);
                        },
                        function(error) {
                            console.log(error);
                            q.reject(error);
                        }
                    );
            }); 

            return q.promise;
        }
    }
})();
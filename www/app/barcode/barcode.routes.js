(function() {
    'use strict';

    angular.module('testing.barcode')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.barcode', {
                url: '/barcode',
                views: {
                    'testingContent': {
                        templateUrl: 'app/barcode/barcode.html',
                        controller: 'BarcodeController as bc'
                    }
                }
            })
    }
})();
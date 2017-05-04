(function() {
    'use strict';

    angular.module('testing.datatable')
    .config(configure)

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('testing.datatable', {
                url: '/datatable',
                views: {
                    'testingContent': {
                        templateUrl: 'app/datatable/datatable.html',
                        controller: 'DatatableController'
                    }
                }
            })
    }
})();
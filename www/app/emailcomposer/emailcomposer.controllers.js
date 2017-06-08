//  controllers
(function() {
'use strict';

    angular
        .module('testing.emailcomposer')
        .controller('EmailComposerController', EmailComposerController);

    EmailComposerController.inject = ['EmailComposerService'];
    function EmailComposerController(EmailComposerService) {
        var vm = this;
        
        vm.openEmailComposer = openEmailComposerFn;
        activate();

        ////////////////

        function activate() { }

        function openEmailComposerFn() {
            EmailComposerService.openEmail().then(
                function(success) {
                    
                },
                function(err) {

                }
            );
        }
    }
})();
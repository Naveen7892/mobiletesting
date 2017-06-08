(function() {
'use strict';

    angular
        .module('testing.emailcomposer')
        .factory('EmailComposerService', EmailComposerService);

    EmailComposerService.inject = ['$q', '$cordovaEmailComposer'];
    function EmailComposerService($q, $cordovaEmailComposer) {
        var service = {
            openEmail: openEmailFn
        };
        
        return service;

        ////////////////
        function openEmailFn() { 

            var q = $q.defer();

            ionic.Platform.ready(function() {
                $cordovaEmailComposer.isAvailable().then(
                    function(available) {
                        console.log(available);
                    },  
                    function(notAvailable) {
                        console.log(notAvailable);
                        alert("Email composer is not available!");
                    }
                );

                var email = {
                    to: 'naveenkumar.in@metamation.com',
                    cc: '',
                    bcc: [],
                    attachments: [
                        // 'file://img/logo.png',
                        'res://icon.png',
                        // 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                        // 'file://README.pdf'
                    ],
                    subject: 'Email with attachment',
                    body: 'Please check the attached files!',
                    isHtml: false
                };

                $cordovaEmailComposer.open(email).then(
                    function(success) {
                        console.log(success);
                        q.resolve(success);
                    },
                    function(err) {
                        // User cancelled the email
                        console.log(err);
                        q.reject(err);
                    }
                );

            });
            

            return q.promise;
        }
    }
})();
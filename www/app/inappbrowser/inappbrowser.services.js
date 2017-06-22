(function() {
'use strict';

    angular
        .module('testing.inappbrowser')
        .factory('InAppBrowserService', InAppBrowserService);

    InAppBrowserService.inject = ['$rootScope', '$cordovaInAppBrowser'];
    function InAppBrowserService($rootScope, $cordovaInAppBrowser) {
        var service = {
            initialize:initializeFn,
            openBrowser1: openBrowser1Fn,
            openBrowser2: openBrowser2Fn,
            openBrowser3: openBrowser3Fn
        };

        initializeFn();

        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'yes'
        };
        
        return service;

        ////////////////
        function initializeFn() {
            ionic.Platform.ready(function() {

                // In-app browser events
                $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event) {

                });

                $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event) {
                    // insert CSS via code / file
                    $cordovaInAppBrowser.insertCSS({
                        code: 'body {background-color:skyblue;}'
                    });

                    // insert Javascript via code / file
                    // $cordovaInAppBrowser.executeScript({
                    //     file: 'script.js'
                    // });
                });

                $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event) {

                });

                $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event) {

                });
            });
            
        }

        function openBrowser1Fn(url) {
          
            // $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
            ionic.Platform.ready(function() {
                $cordovaInAppBrowser.open('http://' + url, '_blank', options)
                .then(function(event) {
                    // success
                    console.log(event);
                })
                .catch(function(event) {
                    // error
                    console.log(event);
                });
            });

            // $cordovaInAppBrowser.close();
        }

        function openBrowser2Fn(url) {
          
            // $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
            ionic.Platform.ready(function() {
                $cordovaInAppBrowser.open('http://' + url, '_self', options)
                .then(function(event) {
                    // success
                    console.log(event);
                })
                .catch(function(event) {
                    // error
                    console.log(event);
                });
            });

            // $cordovaInAppBrowser.close();
        }

        function openBrowser3Fn(url) {
          
            // $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
            ionic.Platform.ready(function() {
                $cordovaInAppBrowser.open('http://' + url, '_system', options)
                .then(function(event) {
                    // success
                    console.log(event);
                })
                .catch(function(event) {
                    // error
                    console.log(event);
                });
            });

            // $cordovaInAppBrowser.close();
        }
    }
})();
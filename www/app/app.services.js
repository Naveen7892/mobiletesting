// Testing app services

(function() {
'use strict';

  angular
    .module('testing')
    .factory('startupFactory', startupFactory);

  startupFactory.inject = ['$ionicPlatform', '$state', '$ionicHistory', '$cordovaToast', '$timeout', '$rootScope'];
  function startupFactory($ionicPlatform, $state, $ionicHistory, $cordovaToast, $timeout, $rootScope) {

    var globalObj = {};
    globalObj.isMobileEnv = true;

    var service = {
      initialize: initialize
    };
    
    return service;

    ////////////////
    function initialize() { 
      console.log("Success");

      // Checks whether application running in browser or device
      if(window.cordova) {
        globalObj.isMobileEnv = true;
      } else {
        globalObj.isMobileEnv = false;
      }
      console.log(globalObj);

      ionic.Platform.ready(function() {
        console.log(ionic.Platform.platform());
        if(!globalObj.isMobileEnv) return;

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 100);

        // Double tap back button to close the app, but if in specific page go backward
        var backButton = 0;
        $ionicPlatform.registerBackButtonAction(function(event) {
          event.preventDefault();
          if($state.current.name == 'testing.home' || $state.current.name == 'testing.aboutus') {
              if(backButton === 0) {
                backButton++;
                $cordovaToast.showShortBottom('Press back button again to exit!');
                $timeout(function() {
                  backButton = 0;
                }, 2000);
              } else {
              // navigator.app.exitApp();
              ionic.Platform.exitApp();
            }
          } else {
            $ionicHistory.goBack();
          }
        }, 100);
      });
        
    }
  }
})();
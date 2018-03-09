(function() {
    'use strict';

    angular.module('testing')
    .run(runBlock)

    runBlock.$inject = ['$rootScope', '$ionicPlatform', '$timeout', 'startupFactory'];

    function runBlock($rootScope, $ionicPlatform, $timeout, startupFactory) {
        $ionicPlatform.ready(function() {

            // Test FCM's PUSH NOTIFICATION
            /*
            $timeout(function() {

                //FCMPlugin.onTokenRefresh( onTokenRefreshCallback(token) ); 
                //Note that this callback will be fired everytime a new token is generated, including the first time. 
                FCMPlugin.onTokenRefresh(function(token){
                    alert( token );
                });

                //FCMPlugin.getToken( successCallback(token), errorCallback(err) ); 
                //Keep in mind the function will return null if the token has not been established yet. 
                FCMPlugin.getToken(function(token){
                    alert(token);
                });

                //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) ) 
                //Here you define your application behaviour based on the notification data. 
                FCMPlugin.onNotification(function(data){
                    if(data.wasTapped){
                    //Notification was received on device tray and tapped by the user. 
                    alert( JSON.stringify(data) );
                    }else{
                    //Notification was received in foreground. Maybe the user needs to be notified. 
                    alert( JSON.stringify(data) );
                    }
                });
            }, 3000);

            */

            if(window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }

            // Invoke startup function
            startupFactory.initialize();
        });
    }
})();
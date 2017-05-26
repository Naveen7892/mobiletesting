/* CUSTOM DIRECTIVES */

angular.module('testing.directives', []) 

.directive('mtBackButton', [function () {
    return {
        restrict: 'E',
        replace: true,
        scope: false,
        template: '<button class="button icon button-clear"></button>',

        compile: function (element, attrs) {
            // var icon = ionic.Platform.isIOS() ? 'ion-ios-arrow-back' : 'ion-android-arrow-back';
            var icon = 'ion-arrow-left-c';
            angular.element(element[0]).addClass(icon);
        }
    };
}])

.directive('mtEmptySpace', [function() {
    return {
        restrict: 'E',
        replace: true,
        scope: false,
        template: '<div style="margin: 10px;"> </div>'
    };
}])

;
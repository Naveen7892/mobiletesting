//  controllers
(function() {
'use strict';

    angular
        .module('testing.canvas')
        .controller('CanvasController', CanvasController);

    CanvasController.inject = ['$scope', '$ionicScrollDelegate'];
    function CanvasController($scope, $ionicScrollDelegate) {
        var vm = this;

        vm.mousePressed = false;
        vm.lastX = 0;
        vm.lastY = 0;
        vm.ctx = null;
        vm.newPageX = 0;
        vm.newPageY = 0;

        vm.offsetLeft = null;
        vm.offsetTop = null;
        vm.imageOutline = new Image();
        vm.isFirstTime = true;
        vm.imageHref = "#";
        vm.scroll = true;

        // vm.mouseDown = mouseDown;
        // vm.mouseMove = mouseMove;
        // vm.mouseLeave = mouseLeave;

        vm.clearCanvas = clearCanvasFn;
        vm.saveCanvasToImage = saveCanvasToImageFn;
        
        activate();
        // document.addEventListener("DOMContentLoaded", function() {

        //     vm.ctx = document.getElementById("canvasContainer").getContext("2d");

        //     document.getElementById("canvasContainer").addEventListener("mousedown", mouseDown);
        //     document.getElementById("canvasContainer").addEventListener("mousemove", mouseMove);
        //     document.getElementById("canvasContainer").addEventListener("mouseup", mouseUp);
        //     document.getElementById("canvasContainer").addEventListener("mouseleave", mouseLeave);

        //     console.log("Activated!");
        //     console.log(vm.ctx);
        // }, false);

        ////////////////

        // $scope.$on("$ionicView.beforeEnter", function() {  
        // });

        // $scope.$on("$ionicView.afterEnter", function() {
        // });

        function activate() {
            console.log("Activate called!");

            // complete or interactive or loading
            if(document.readyState === "complete" || document.readyState === "interactive") {
                // DOMContentLoaded or load
                // window.addEventListener('DOMContentLoaded', function() {
                console.log("Complete");
                vm.ctx = document.getElementById("canvasContainer").getContext("2d");

                if(!window.cordova) {
                    document.getElementById("canvasContainer").addEventListener("mousedown", mouseDown);
                    document.getElementById("canvasContainer").addEventListener("mousemove", mouseMove);
                    document.getElementById("canvasContainer").addEventListener("mouseup", mouseUp);
                    document.getElementById("canvasContainer").addEventListener("mouseleave", mouseLeave);
                } else {
                    document.getElementById("canvasContainer").addEventListener("touchstart", mouseDown);
                    document.getElementById("canvasContainer").addEventListener("touchmove", mouseMove);
                    document.getElementById("canvasContainer").addEventListener("touchend", mouseUp);
                    // touchenter, touchleave and touchcancel didn't work
                }

                testImage();
                console.log("Activated!");
                console.log(vm.ctx);
            } else {
                console.log(document);
                console.log(document.readyState);
            }
            // );
        }

        
        function draw(x, y, isDown) {

            if(vm.isFirstTime) {
                // console.log("Image");
                // // vm.imageOutline.src = 'img/elephant.jpg';
                // vm.imageOutline.src = 'img/duck.png';
                // var canvas = document.getElementById('canvasContainer');
                // vm.ctx.drawImage(vm.imageOutline, 0, 0, canvas.clientWidth, canvas.clientHeight);
                // vm.isFirstTime = false;
                // testImage();
                // return;
            }

            // var isScroll = document.getElementById('ionContent').getAttribute('scroll');
            // $ionicScrollDelegate.resize();
            // if(isDown && isScroll === 'false') {
            if(isDown) {
                console.log("Drawing" + x + " " + y);

                vm.ctx.strokeStyle = 'blue';
                // vm.ctx.fillStyle = "red";
                vm.ctx.beginPath();
                vm.ctx.lineWidth = 5;
                vm.ctx.lineJoin = "round";
                vm.ctx.moveTo(vm.lastX, vm.lastY);
                vm.ctx.lineTo(x, y);
                vm.ctx.closePath();
                vm.ctx.stroke();
                // vm.ctx.fill();

                // vm.ctx.beginPath();
                // vm.ctx.moveTo(100, 150);
                // vm.ctx.lineTo(450,50);
                // vm.ctx.stroke();
               
            }

            vm.lastX = x;
            vm.lastY = y;
        }

        function mouseDown(event) {
            console.log(event);
            if(!window.cordova) {
                vm.newPageX = event.pageX;
                vm.newPageY = event.pageY - 45;
            } else {
                vm.newPageX = event.changedTouches[0].pageX;
                vm.newPageY = event.changedTouches[0].pageY - 45;
                // vm.newPageX = event.gesture.touches[0].pageX;
                // vm.newPageY = event.gesture.touches[0].pageY - 45;
            }
            console.log("Mouse Down." +  vm.newPageX + " " + vm.newPageY);

            vm.mousePressed = true;
            vm.offsetLeft = document.getElementById("canvasContainer").offsetLeft;
            vm.offsetTop = document.getElementById("canvasContainer").offsetTop;
            // console.log("Offset" +  vm.offsetLeft + " " + vm.offsetTop);
            // console.log(document.getElementById("canvasContainer").offsetParent);
            // console.log(document.getElementById("canvasContainer").offsetHeight);
            // console.log(document.getElementById("canvasContainer").offsetWidth);

            vm.lastX = vm.newPageX - vm.offsetLeft;
            vm.lastY = vm.newPageY - vm.offsetTop;

            // draw(event.pageX - vm.offsetLeft, event.pageY - vm.offsetTop, true);
            // draw(vm.newPageX, vm.newPageY, true);
            draw(vm.newPageX - vm.offsetLeft, vm.newPageY - vm.offsetTop, true);
        }

        function mouseMove(event) {
            // console.log("Mouse Move.");
            // console.log(event);
            if(vm.mousePressed) {
                if(!window.cordova) {
                    vm.newPageX = event.pageX;
                    vm.newPageY = event.pageY - 45;
                } else {
                    vm.newPageX = event.changedTouches[0].pageX;
                    vm.newPageY = event.changedTouches[0].pageY - 45;
                }

                vm.offsetLeft = document.getElementById("canvasContainer").offsetLeft;
                vm.offsetTop = document.getElementById("canvasContainer").offsetTop;
                console.log("Offset" +  vm.offsetLeft + " " + vm.offsetTop);
                // draw(event.pageX - vm.offsetLeft, event.pageY - vm.offsetTop, true);
                // draw(vm.newPageX, vm.newPageY, true);
                draw(vm.newPageX - vm.offsetLeft, vm.newPageY - vm.offsetTop, true);
            }
        }

        function mouseUp(event) {
            // console.log("Mouse Up.");
            // console.log(event);
            vm.mousePressed = false;
        }

        function mouseLeave(event) {
            // console.log("Mouse Leave.");
            // console.log(event);
            vm.mousePressed = false;
        }

        function clearCanvasFn() {
            var canvas = document.getElementById('canvasContainer');
            
            vm.ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            testImage();
        }

        function testImage() {
            console.log("Test image called!");
            vm.imageOutline.src = 'img/elephant.jpg';
            // vm.imageOutline.src = 'img/duck.png';
            var cv = document.getElementById('canvasContainer');
            vm.imageOutline.onload = function() {
                vm.ctx.drawImage(vm.imageOutline, 0, 0, cv.clientWidth, cv.clientHeight);
            };
        }

        function saveCanvasToImageFn() {
            var img = document.getElementById('canvasContainer').toDataURL();

            // remove "data:image/png;" - 15 characters
            img = img.substring(15);

            // vm.imageHref = "http://data:application/octet-stream;headers=Content-Disposition: attachment; filename=canvas.png" + img;
            vm.imageHref = "data:image/octet-stream;headers=Content-Disposition: attachment; filename=canvas.png" + img;
            console.log(vm.imageHref);
        }

        vm.check = function() {
            console.log(document.getElementById('canvasDownload'));
        };
        
        vm.canvas2image = function() {
            document.getElementById("theImage").src = document.getElementById('canvasContainer').toDataURL();
            Canvas2Image.saveAsPNG(document.getElementById('canvasContainer'));
        };  

        vm.editCanvas = function() {
            var isEdit = document.getElementById('ionContent').getAttribute('scroll');
            // console.log(typeof isEdit);
            // console.log(isEdit);
            if(isEdit === 'true') {
                console.log("Set to false");
                document.getElementById('ionContent').setAttribute('scroll', 'false');
            } else {
                console.log("Set to true");
                document.getElementById('ionContent').setAttribute('scroll', 'true');
            }
            // $ionicScrollDelegate.resize();
            
        };
    }
})();
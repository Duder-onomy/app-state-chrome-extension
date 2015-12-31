'use strict';

var angular = require('angular'),
    material = require('angular-material'), // jshint ignore:line
    jsonEditor = require('jsoneditor'); // jshint ignore:line

window.alert('YEAH BRAH');

angular
    .module('app-sate-extension', ['ngMaterial'])
    .controller('chrome-extension-controller', ['$scope', '$window', function($scope, $window) {
        // Controller Methods
        $scope.initialize = initialize;

        // Controller Properties
        $scope.editor = null;
        $scope.activeTab = null;
        $scope.initialized = false;
        $scope.appStateInstance = null;
        $scope.interval = null;

        function initialize() {
            $scope.editor = new jsonEditor(document.querySelector('.editor'));

            $scope.editor.set({ duder : true });

            chrome.devtools.inspectedWindow.eval(
                "window.appState();",
                function(result, isException) {
                    $scope.editor.set(result);
                    alert(isException);
                }
            );

            // $window.chrome.tabs.query({ active: true, currentWindow : true }, function(tabs) {
            //     console.log('------');
            //     console.log(tabs[0]);
            //     // $scope.appStateInstance = tabs[0];
            //     chrome.windows.get(tabs[0].windowId, function(thisWindow) {
            //         console.log('++++++++');
            //         debugger;
            //         console.log(thisWindow);
            //         // $scope.thisWindow = thisWindow;
            //     });
            // });

            // $scope.interval = setInterval(function() {
            //     console.log('yeah?');
            //     console.log($scope.thisWindow.appState);
            //     if($scope.thisWindow.appState && !$scope.initialized) {
            //         $scope.initialized = true;
            //
            //         clearInterval($scope.interval);
            //
            //         $scope.thisWindow.appState.subscribe('', function() {
            //             console.log('did this get called?');
            //             $scope.editor.set($scope.thisWindow.appState());
            //             console.log('RAN');
            //         });
            //     }
            // }, 1);
        }
    }]);

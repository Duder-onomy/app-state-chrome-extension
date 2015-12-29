'use strict';

var angular = require('angular'),
    material = require('angular-material'), // jshint ignore:line
    jsonEditor = require('jsoneditor'); // jshint ignore:line

angular
    .module('app-sate-extension', ['ngMaterial'])
    .controller('chromeExtensionController', ['$scope', function($scope) {
        // Controller Methods
        $scope.initialize = initialize;

        // Controller Properties

        function initialize() {

        }
    }]);

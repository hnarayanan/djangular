'use strict';

/**
 * @ngdoc function
 * @name djangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the djangularApp
 */
angular.module('djangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

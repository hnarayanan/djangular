'use strict';

/**
 * @ngdoc function
 * @name djangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the djangularApp
 */
angular.module('djangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

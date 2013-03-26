'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, TestService) {

    $scope.names = TestService.query();

  });
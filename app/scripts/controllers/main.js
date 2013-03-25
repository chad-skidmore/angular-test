'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, TestService) {

    $scope.names = TestService.query();

    // TestService.query({}, function (response) {
    //   console.log(response);
    //   $scope.names = response.results;
    // });

    // $scope.names = TestService.query({}, function(data){
    //   console.log('data');
    //   console.log(data);
    // });

  });

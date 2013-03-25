'use strict';

angular.module('angularAppServices', ['ngResource'])
  .factory('TestService', function($resource) {

    return $resource('http://www.qtech.me/api/test',
      {},
      {
        query : {method :'JSONP', isArray : true}
      }
    );

  });
'use strict';

angular.module('angularAppServices', ['ngResource'])
  .factory('TestService', function($resource) {

    return $resource('http://www.qtech.me/api/test',
      {callback: 'JSON_CALLBACK'},
      {
        query : {method :'JSONP', isArray : true}
      }
    );

  });
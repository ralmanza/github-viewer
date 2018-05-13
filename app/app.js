(function() {
  'use strict';
  //Commons module
  angular.module('Commons', []);
  //users module
  angular.module('Users', []);
  //Repository module
  angular.module('Repositories', []);
  //Main Module
  angular.module('App', [
    'ngRoute',
    'Users',
    'Repositories',
    'Commons'
  ]).config(configuration);  

  configuration.$inject = ['$locationProvider', '$routeProvider'];

  /**
   * @name configuration
   * @desc Angular configuration function
   * @param {Object} $locationProvider 
   * @param {Opject} $routeProvider
   */
  function configuration($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/users'});
  }
})();
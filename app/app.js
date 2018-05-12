(function() {
  'use strict';
  
  //Modules
  angular.module('Users', []);
  angular.module('Repositories', []);
  //Main Module
  angular.module('App', [
    'ngRoute',
    'Users',
    'Repositories'
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
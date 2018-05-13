(function() {
  'use strict';

  angular
    .module('Users')
    .directive('userCard', card);

  /**
   * @name card
   * @desc User card directive 
   * @return {Objec} DDO - Directive definition object
   */
  function card() {
    return {
      restrict: 'E',
      templateUrl: 'user/components/user-card/user-card.html',
      scope: {
        user: '='
      },
      link: angular.noop
    };
  }  
})();

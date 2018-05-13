(function() {
  'use strict';

  angular
    .module('Repositories')
    .directive('gvRepositoryCard', card);

  /**
   * @name card
   * @desc Repository card directive 
   * @return {Objec} DDO - Directive definition object
   */
  function card() {
    return {
      restrict: 'E',
      templateUrl: 'repository/components/repository-card/repository-card.html',
      scope: {
        repository: '='
      },
      link: angular.noop
    };
  }  
})();

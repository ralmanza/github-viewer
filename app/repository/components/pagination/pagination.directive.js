(function() {
  'use strict';

  angular
    .module('Repositories')
    .directive('gvPagination', card);

  /**
   * @name card
   * @desc Repository card directive 
   * @return {Objec} DDO - Directive definition object
   */
  function card() {
    return {
      restrict: 'E',
      templateUrl: 'repository/components/pagination/pagination.html',
      scope: {
        items: '=',
        since: '=',
        limit: '@'
      },
      link: linkFun
    };

    /**
     * 
     * @param {Object} scope 
     */
    function linkFun(scope) {
      scope.getPages = getPages;
      scope.navigateTo = navigateTo;
      scope.currentPage = 0;

      /**
       * @name getPages
       * @desc Get the array of pages
       * @return {number[]}
       */
      function getPages() {
        return new Array(Math.ceil(scope.items.length/scope.limit)) 
      }

      /**
       * @name navigateTo
       * @desc Get the array of pages
       * @param {number} page - page number
       */
      function navigateTo(page) {
        if (page >= 0 && page < Math.ceil(scope.items.length/scope.limit)) {
          scope.currentPage = page;
          scope.since = scope.currentPage * scope.limit;
        }
      }      
    }
  }  
})();

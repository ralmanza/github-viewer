(function (){
  angular
    .module("Repositories")
    .controller('RepositoryCtrl', repositoryCtrl);

  repositoryCtrl.$inject = ['$routeParams'];
  
  /**
   * @name repositoryCtrl
   * @desc Github user list controller
   */
  function repositoryCtrl($routeParams) {
    console.log('id:' + $routeParams.userId);
  }
})();
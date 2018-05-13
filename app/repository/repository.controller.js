(function (){
  angular
    .module("Repositories")
    .controller('RepositoryCtrl', repositoryCtrl);

  repositoryCtrl.$inject = ['$routeParams', 'userResource'];
  
  /**
   * @name repositoryCtrl
   * @desc Github user list controller
   * @param {Object} $routeParams
   * @param {Object} userResource
   */
  function repositoryCtrl($routeParams, userResource) {
    var vm = this;
    vm.userName = $routeParams.userId;
    vm.repositories = [];
    vm.loadRepositoryByUser = loadRepositoryByUser;
    loadRepositoryByUser(vm.userName);

    /**
     * @name loadRepositoryByUser
     * @desc Retrieve github user repositories
     * @param {string} userId 
     */
    function loadRepositoryByUser(userId) {
      userResource.getRepositoriesByUser(userId)
        .then(function (result) {
          angular.forEach(result.data, function (repo) {vm.repositories.push(repo)});
        })
        .catch(function () {
          window.alert('It is not possible to retrieve "' + $routeParams.userId + '" repositories.');
        });
    }
  }
})();
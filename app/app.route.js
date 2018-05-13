(function (){
  angular
    .module("App")
    .config(appRoutes);
  
  appRoutes.$inject = ['$routeProvider'];
  
  /**
   * @name appRoutes
   * @desc App routes
   * @param {Object}  
   */
  function appRoutes($routeProvider) {
    $routeProvider
    .when("/users", {
      templateUrl: "user/user.html",
      controller: 'UserCtrl',
      controllerAs: 'vm'
    })
    .when("/users/:userId/repositories", {
      templateUrl: "repository/repository.html",
      controller: 'RepositoryCtrl',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/users'
    });
  }
})();
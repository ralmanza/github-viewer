(function (){
  angular
    .module('Users')
    .controller('UserCtrl', userCtrl);

  userCtrl.$inject = ['userResource'];
  
  /**
   * @name userCtrl
   * @desc Github user list controller
   * @param {Object} userResource - Service used to interact with the user resource
   */
  function userCtrl(userResource) {
    var vm = this;

    vm.users = [];
    vm.loadUsers = loadUsers;
    //Load the first 30 users at first time
    loadUsers(0);

    /**
     * @name loadUsers
     * @desc Load the github users  
     * @param {number} since 
     */
    function loadUsers(since) {
      userResource.getUsers(since)
        .then(function (result) {
          angular.forEach(result.data, function (user) {vm.users.push(user)});
        })
        .catch(function () {
          window.alert('It is not possible to retrieve Github users');
        });
    }
  }
})();
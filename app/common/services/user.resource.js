(function() {
  angular
    .module('Commons')
    .service('userResource', userResource)
    
  userResource.$inject = ['$http'];

  /**
   * @name userResource
   * @desc Service used to interact with the user API resource
   * @param {Object} $param  
   */
  function userResource($http) {
    var baseUrl = 'https://api.github.com/';

    this.getUsers = getUsers;
    this.getRepositoriesByUser = getRepositoriesByUser;

    /**
     * @name getUsers
     * @desc Gets user list
     * @param {number} since
     * @return {Promise}  
     */
    function getUsers(since) {
      var config = {
        params: {since: since}
      };
      return $http.get(baseUrl + 'users', config);
    };

    /**
     * @name getRepositoriesByUser
     * @desc Gets user repositories
     * @param {*} since 
     */
    function getRepositoriesByUser(userId) {
      return $http.get(baseUrl + 'users/' + userId + '/repos');
    };
  }
})();
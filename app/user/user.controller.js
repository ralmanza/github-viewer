(function (){
  angular
    .module("Users")
    .controller('UserCtrl', userCtrl);

  userCtrl.$inject = [];
  
  /**
   * @name userCtrl
   * @desc Github user list controller
   */
  function userCtrl() {
    console.log('user COntroller');
  }
})();
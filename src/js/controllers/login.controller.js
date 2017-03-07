export default function loginCtrl($scope, $firebase, AuthFactory, $location, $window){
  this.formLogin = {};
  this.formCreate =  {};
  this.login = () => {
    AuthFactory.authUser(this.formLogin);
  };

  this.createAccount = () => {
    AuthFactory.createUser(this.formCreate);
  };

  

};

loginCtrl.$inject = ["$scope", "$firebase", "AuthFactory", "$location", "$window"];

export default function mainCtrl($firebase, AuthFactory){


   AuthFactory.checkAuth();

  this.logged = function(){
    return AuthFactory.isLogged;
  }

  this.logout = function(){
    AuthFactory.logout();
  };

};
mainCtrl.$inject = ["$firebase", "AuthFactory"];

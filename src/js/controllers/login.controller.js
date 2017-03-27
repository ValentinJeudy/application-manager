export default function loginCtrl(AuthFactory){
  this.formLogin = {};
  this.formCreate =  {};
  this.login = () => {
    AuthFactory.authUser(this.formLogin);
  };

  this.createAccount = () => {
    AuthFactory.createUser(this.formCreate);
  };



};

loginCtrl.$inject = ["AuthFactory"];

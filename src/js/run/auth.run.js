

export default function authRun(AuthFactory){

  AuthFactory.checkAuth();


  };
  authRun.$inject = ["AuthFactory"];

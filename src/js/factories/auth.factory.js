import firebase from 'firebase';

export default function AuthFactory($firebase, $location, $rootScope){

  var config = {
    apiKey: "AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI",
    authDomain: "application-management.firebaseapp.com",
    databaseURL: "https://application-management.firebaseio.com",
    storageBucket: "application-management.appspot.com",
    messagingSenderId: "349971007482"
  };
  firebase.initializeApp(config);
  var AuthFactory = {};
  var auth = firebase.auth();

  AuthFactory.isLogged = false;

  AuthFactory.createUser = function (credentials) {
        auth.createUserWithEmailAndPassword(
        credentials.createEmail,
        credentials.createPassword
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
      }).then(function(response){
        console.log(response);
      })
  };

  AuthFactory.authUser = function (credentials) {
        return  auth.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        ).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/wrong-password') {
            alert('Le mot de passe n\'est pas valide');
          } else {
            alert(errorMessage);
          }
        }).then(function(response) {
          $rootScope.$apply(() => {
            $location.path('/application');
          });
      })
  };

  AuthFactory.logout = function(){
      return auth.signOut();
  };

  AuthFactory.checkAuth = function(){
    return auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLogged = true;
        $rootScope.$apply(() => {
          $location.path('/application');
        });
      } else {
        this.isLogged = false;
        $rootScope.$apply(() => {
          $location.path('/');
        });
      }
    });
  };
  return AuthFactory;
};
AuthFactory.$inject = ["$firebase", "$location", "$rootScope"];

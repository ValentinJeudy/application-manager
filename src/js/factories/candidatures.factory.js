import firebase from 'firebase';


export default function CandFactory($rootScope, $timeout){

  var CandFactory = {
    data: {
      candidatures: {}
    }
  };
  var database = firebase.database();
  var userId = firebase.auth().currentUser.uid;

  CandFactory.addCand = function(candidature){
    $timeout(function(){
      $rootScope.$apply(function(){
        database.ref('users/' + userId + '/candidatures/').push(candidature);
      });
    });
  };


  CandFactory.getCand = function(){
    database.ref('users/' + userId + '/candidatures/')
    .on('value', (snapshot) => {
        var items = snapshot.val();
        angular.forEach(items, (item, key) => {
           if (!CandFactory.data.candidatures.hasOwnProperty(key)) {
             $timeout(() => {
               $rootScope.$apply(() => {
                 CandFactory.data.candidatures[key] = item;
               });
             });
           }
        });
      });
    };

    CandFactory.updatePost = function(key, candidature){
      $timeout(() => {
        $rootScope.$apply(() => {
          database.ref('users/' + userId + '/candidatures/')
          .child(key)
          .update(candidature.formUpdate)
          for(var i in CandFactory.data.candidatures[key]){
            if(candidature.formUpdate.hasOwnProperty(i)){
              CandFactory.data.candidatures[key][i] = candidature.formUpdate[i];
            }
          };
        });
      });
    };


    CandFactory.deletePost = function(key){
      $timeout(() => {
        $rootScope.$apply(() => {
          database.ref('users/' + userId + '/candidatures/')
          .child(key)
          .remove(() => {
            delete CandFactory.data.candidatures[key];
          });
        });
      });
    };

  return CandFactory;

};
CandFactory.$inject = ["$rootScope", "$timeout"];

export default function applicationCtrl(CandFactory, uiGmapGoogleMapApi, $http){

    var that = this;

    that.formAddCand = {};

    that.formUpdate = {};

    that.address = '';

    CandFactory.getCand();

    that.candidatures = CandFactory.data.candidatures;

    that.addCand = () => {
      // that.formAddCand.placeId = that.placeId;
      console.log(that.address );

      CandFactory.addCand(that.formAddCand);
    };

    that.deleteCandidature = (key) => {
      CandFactory.deletePost(key);
    };

    that.updateCandidature = (key) => {
      CandFactory.updatePost(key, that.candidatures[key]);
    };





    that.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    // Directive autocomplete traitement
    //
    // that.places = [];
    //
    // that.showPrediction = () => {
    //   if(typeof that.places[0] == 'undefined'){
    //     return false;
    //   }else{
    //     return true;
    //   };
    // };
    //
    // that.getPlace = () => {
    //   $http({
    //     method: 'GET',
    //     url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + that.formAddCand.address + '&types=geocode&key=AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI',
    //     params: {
    //       key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI',
    //       input: that.formAddCand.address
    //     },
    //     responseType: 'json'
    //   }).then( function successCallback(response){
    //       that.places = response.data.predictions;
    //   }, function errorCallback(error){
    //       console.log(error);
    //   });
    //   that.showPrediction = () =>{
    //     if(typeof that.places[0] == 'undefined'){
    //       return false;
    //     }else{
    //       return true;
    //     };
    //   }
    // };
    //
    // that.getLocation = (id, description) => {
    //   that.placeId = id;
    //   that.formAddCand.address = description;
    //   console.log(that.placeId + that.input);
    //   that.showPrediction = () => {
    //     return false;
    //   }
    // };



};

applicationCtrl.$inject = ["CandFactory", "uiGmapGoogleMapApi", "$http"];

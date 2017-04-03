export default function applicationCtrl(CandFactory, uiGmapGoogleMapApi, $http, gmapFactory){

    var that = this;

    that.formAddCand = {
      location: {}
    };

    that.formUpdate = {};

    CandFactory.getCand();

    that.candidatures = CandFactory.data.candidatures;

    that.addCand = () => {
      // that.formAddCand.placeId = that.placeId;
      console.log(that.placeId);

      CandFactory.addCand(that.formAddCand);
    };

    that.deleteCandidature = (key) => {
      CandFactory.deletePost(key);
    };

    that.updateCandidature = (key) => {
      CandFactory.updatePost(key, that.candidatures[key]);
    };

    // that.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };



};

applicationCtrl.$inject = ["CandFactory", "uiGmapGoogleMapApi", "$http"];

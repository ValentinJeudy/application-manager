export default function applicationCtrl(CandFactory, uiGmapGoogleMapApi){

    this.formAddCand = {};

    this.formUpdate = {};

    CandFactory.getCand();

    this.candidatures = CandFactory.data.candidatures;

    this.addCand = () => {
      CandFactory.addCand(this.formAddCand);
    };

    this.deleteCandidature = (key) => {
      CandFactory.deletePost(key);
    };

    this.updateCandidature = (key) => {
      CandFactory.updatePost(key, this.candidatures[key]);
    };

    this.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    this.autoComplete = () => {

    };

};

applicationCtrl.$inject = ["CandFactory", "uiGmapGoogleMapApi"];

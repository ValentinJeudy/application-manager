export default function applicationCtrl(CandFactory){

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

};

applicationCtrl.$inject = ["CandFactory"];

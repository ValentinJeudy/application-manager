export default function gmapDisplay(gmapFactory, $timeout){

  return{
    restrict: 'E',
    scope: {
      placeId: '=',
      key: '=',
      location: '='
    },
    template:
    `
    <div class="mapContainer"></div>
    `,
    link: function(scope, element, attrs){
        console.log(element);
        scope.map = element[0];
  },
    controller ($http) {
        console.log(this.mapContainer, this.placeId, this.location);
      var that = this;
      gmapFactory.displayMap(this.mapcontainer, this.placeId, this.location);

    },
    controllerAs: '$gmdp',
    bindToController: true
  }
};

// ngAutocomplete.$inject = ["gmapFactory"];

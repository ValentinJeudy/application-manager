export default function gmapDisplay(gmapFactory){

  return{
    restrict: 'E',
    scope: {
      placeId: '='
    },
    template:
    `
    <div ng-model="$gmdp.map"></div>
    `,
    controller ($http) {

      var that = this;
      // gmapFactory.displayMap(that.map, that.placeId);

    },
    controllerAs: '$gmdp',
    bindToController: true
  }
};

// ngAutocomplete.$inject = ["gmapFactory"];

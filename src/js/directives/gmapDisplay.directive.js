export default function gmapDisplay(gmapFactory, $timeout){

  return{
    restrict: 'E',
    scope: {
      placeId: '=',
      key: '='
    },
    template:
    `
    <div id="{{ $gmdp.key }}" class="mapContainer"></div>
    `,
    controller ($http) {

      var that = this;

      $timeout( () => {
        gmapFactory.displayMap(that.key, that.placeId);
      }, 500);
    },
    controllerAs: '$gmdp',
    bindToController: true
  }
};

// ngAutocomplete.$inject = ["gmapFactory"];

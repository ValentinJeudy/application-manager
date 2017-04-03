export default function gmapDisplay(gmapFactory, $timeout){

  return{
    restrict: 'E',
    scope: {
      placeId: '=',
      key: '='
    },
    template:
    `
    <div class="mapContainer"></div>
    `,
    link: function(scope, element, attrs){
      // console.log(element[0]);

      let that = this;

      // scope.$onInit = () => {
        gmapFactory.displayMap(element[0] , that.placeId);
      // };

    },
    controller ($http) {

      var that = this;


    },
    controllerAs: '$gmdp',
    bindToController: true
  }
};

// ngAutocomplete.$inject = ["gmapFactory"];

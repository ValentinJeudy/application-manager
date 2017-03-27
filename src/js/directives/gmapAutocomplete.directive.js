export default function ngAutocomplete(gmapFactory){

  return{
    restrict: 'E',
    scope: {
      placeId: '=',
      address: '='
    },
    template:
    `
    <input name="entAddress" type="text" ng-model="$gacp.address" ng-change="$gacp.getPlaces()">
    <ul class="predictions ng-hide" ng-show="$gacp.showPrediction()">
      <li ng-repeat="place in $gacp.places" ng-click="$gacp
      .getLocation(place.place_id, place.description)">
        {{ place.description }}
      </li>
    </ul>
    `,
    controller ($http) {

      var that = this;

      that.places = [];

      that.placeId = "";

      that.getPlaces = () => {
        gmapFactory.getPlaces(that.address);
        that.places = gmapFactory.places;

        console.log(that.placeId);

        that.showPrediction = () =>{
          // console.log(that.places);
          if(that.places.length === 0){
            return false;
          }else{
            return true;
          };
        }
      };

      that.getLocation = (id, description) => {
        // console.log(id, description);
        that.placeId = id;
        that.address = description;
        that.showPrediction = () => {
          return false;
        }
      }

      that.showPrediction = () => {
        if(that.places.length === 0){
          return false;
        }else{
          return true;
        };
      };
    },
    controllerAs: '$gacp',
    bindToController: true
  }
};

// ngAutocomplete.$inject = ["gmapFactory"];

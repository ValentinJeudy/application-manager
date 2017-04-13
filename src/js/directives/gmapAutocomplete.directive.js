export default function ngAutocomplete(gmapFactory, $timeout, $rootScope){

  return{
    restrict: 'E',
    scope: {
      placeId: '=',
      address: '=',
      location: '='
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
    controller: function AutocompleteController() {

      var that = this;

      that.places = [];

      that.getPlaces = () => {
        // console.log(gmapFactory);

        gmapFactory.getPlaces(that.address)
          .then( (places) => {
            that.places = places;
          });

        that.showPrediction = () =>{
          if (that.places.length === 0) {
            return false;
          } else {
            return true;
          };
        }
      };

      that.getLocation = (id, description) => {

        gmapFactory.getPlaceDetails(id)
          .then((location) => {
            that.location = location;
            console.log(that.location);
          });

        that.placeId = id;
        that.address = description;

        that.showPrediction = () => {
          return false;
        }
      };

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

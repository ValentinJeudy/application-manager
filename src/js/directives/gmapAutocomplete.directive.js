export default function ngAutocomplete(){

  return{
    restrict: 'E',
    // scope: {
    //   address: '&input',
    //   placeId: 'placeId'
    // },
    template:
    `
    <input name="entAddress" type="text" ng-model="$gacp.input" ng-change="$gacp.getPlace()">
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

      that.showPrediction = () => {
        if(typeof that.places[0] == 'undefined'){
          return false;
        }else{
          return true;
        };
      };

      that.getPlace = () => {
        console.log(that.placeId);
          $http({
          method: 'GET',
          url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + that.input + '&types=geocode&key=AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI',
          params: {
            key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI',
            input: that.input
          },
          // headers: {
          //   'Access-Control-Allow-Origin': '*',
          //   'content-type': 'application/json',
          //   'crossDomain' : 'true'
          // },
          responseType: 'json'
        }).then( function successCallback(response){
            that.places = response.data.predictions;
        }, function errorCallback(error){
            console.log(error);
        });
        that.showPrediction = () =>{
          if(typeof that.places[0] == 'undefined'){
            return false;
          }else{
            return true;
          };
        }
      };

      that.getLocation = (id, description) => {
        that.placeId = id;
        that.input = description;
        that.showPrediction = () => {
          return false;
        }
      };


    },
    controllerAs: '$gacp',
    bindToController: true
  }


};

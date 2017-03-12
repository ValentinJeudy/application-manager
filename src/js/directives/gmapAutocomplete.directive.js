export default function ngAutocomplete(){

  return{
    restrict: 'E',
    scope: {},
    template:
    `
    <input type="text" ng-model="$gacp.input" ng-change="$gacp.getPlace()">
    <ul>
      <li ng-repeat="place in $gacp.places">
        <p>{{ place.description }}</p>
      </li>
    </ul>
    `,
    controller ($http) {
      this.getPlace = () => {
        this.places = {};

        $http({
          method: 'GET',
          url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + this.input + '&types=geocode&key=AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI',
          params: {
            key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI',
            input: this.input
          },
          header: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json',
            'crossDomain' : 'true'
          },
          responseType: 'json'
        }).then( function successCallback(response){
            // this.places = response.data.predictions;
            console.log(response);

        }, function errorCallback(error){
          console.log(error);
        });

        // var input = document.getElementById('autocomplete');
        // var places = google.maps.places;
        // console.log(input);
        // var autocomplete = new places.AutocompleteService(input)
        // .getPlacePredictions({
        //   input: input,
        //   types: 'geocode'
        //
        // }, function(response){
        //   console.log(response);
        // });
      };
    },
    controllerAs: '$gacp',
    bindToController: true
  }


};

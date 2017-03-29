export default function gmapFactory($rootScope, $timeout, $http){

let gmapFactory = {
  places: []
};


gmapFactory.getPlaces = function(placeSearched) {
  $http({
  method: 'GET',
  url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + placeSearched + '&types=geocode&key=AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI',
  params: {
    key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI',
    input: placeSearched
  },
  responseType: 'json'
  })
  .then( function successCallback(response){
      gmapFactory.places = response.data.predictions;

  }, function errorCallback(error){
      console.log(error);
  });
};


gmapFactory.displayMap = function(mapContainer, placeId) {

    let elem = document.querySelector("#" + mapContainer);
    // google.maps.event.addDomListener(window, 'load', initialize);
    console.log(elem);

    // function initialize() {
      new google.maps.Map(elem, {
        center: {lat: 45.518, lng: -122.672},
        zoom: 15
      });
    // };

    // google.maps.GeocoderRequest(elem, {
    //   address: placeId
    // })
};


  return gmapFactory;

};

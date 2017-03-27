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

gmapFactory.displayMap = function(placeContainer, placeId) {
    let map = new google.maps.Map(placeContainer, {
      center: {lat: -33.8666, lng: 151.1958},
      zoom: 15,
      placeId: palceId
    });
};


  return gmapFactory;

};

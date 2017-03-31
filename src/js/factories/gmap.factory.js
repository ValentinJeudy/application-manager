export default function gmapFactory($rootScope, $timeout, $http){

let gmapFactory = {
  places: []
};


gmapFactory.getPlaces = function(placeSearched) {
  $http({
  method: 'GET',
  url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
  params: {
    input: placeSearched,
    key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI'
  },
  responseType: 'json'
  })
  .then( function successCallback(res){
      gmapFactory.places = res.data.predictions;
      // console.log(res);

  }, function errorCallback(err){
      console.log(err);
  });
};

gmapFactory.getPlaceDetails = function(placeId) {
  $http({
    method: 'GET',
    // url: 'https://maps.googleapis.com/maps/api/place/details/json',
    url: 'https://maps.googleapis.com/maps/api/place/details/json',
    params: {
      placeid: placeId,
      key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI'
    },
    // headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Headers": "Content-Type, Content-Length, X-Requested-With",
      // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    // },
    responseType: 'json'
  })
  .then( function successCallback(res){

      return res.data.result.geometry.location;

      // gmapFactory.lat = res.data.result.geometry.location.lat;
      // gmapFactory.lng = res.data.result.geometry.location.lng;

      // console.log(gmapFactory.location);
  }, function errorCallback(err){
    console.log(err);
  });
};

gmapFactory.displayMap = function(mapContainer, placeId) {

    let elem = document.querySelector("#" + mapContainer);
    // google.maps.event.addDomListener(window, 'load', initialize);
    // console.log(elem);

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

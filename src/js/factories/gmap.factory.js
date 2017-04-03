export default function gmapFactory($rootScope, $timeout, $http, $q, $sce){

let gmapFactory = {
  places: []
};


gmapFactory.getPlaces = function(placeSearched) {
  const defer = $q.defer();
  $http({
  method: 'GET',
  url: 'api/maps/api/place/autocomplete/json',
  params: {
    input: placeSearched,
    key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI'
  },
  responseType: 'json',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
  })
  .then( function successCallback(res){

        gmapFactory.places = $sce.trustAsResourceUrl(res.data.predictions);
        defer.resolve(gmapFactory.places);
        console.log(gmapFactory.places, 'factory');

  }, function errorCallback(err){
      console.log(err);
      defer.reject(err);
  });
  return defer.promise;
};

gmapFactory.getPlaceDetails = function(placeId) {
  const defer = $q.defer();
  $http({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/place/details/json',
    params: {
      placeid: placeId,
      key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI'
    },
    responseType: 'json'
  })
  .then( function successCallback(res){
      gmapFactory.location = res.data.result.geometry.location;
      defer.resolve(gmapFactory.location);
      console.log(gmapFactory.location, ' factory');

  }, function errorCallback(err){
    console.log(err);
    defer.reject(err);
  });
};

gmapFactory.displayMap = function(mapContainer, placeId) {

    let elem =  angular.element(mapContainer).find('div');

      new google.maps.Map(elem[0], {
        center: {lat: 45.518, lng: -122.672},
        zoom: 15
      });

    // google.maps.GeocoderRequest(elem, {
    //   address: placeId
    // })
};


  return gmapFactory;

};

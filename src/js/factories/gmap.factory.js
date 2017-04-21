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
  responseType: 'json'
  })
  .then( function successCallback(res){
    console.log(gmapFactory.places, 'factory');
      gmapFactory.places = res.data.predictions;
      defer.resolve(gmapFactory.places);

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
    url: 'api/maps/api/place/details/json',
    params: {
      placeid: placeId,
      key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI'
    },
    responseType: 'json'
  })
  .then( function successCallback(res){

      gmapFactory.location = res.data.result.geometry.location;
      defer.resolve(gmapFactory.location);

  }, function errorCallback(err){

    console.log(err);
    defer.reject(err);

  });
  return defer.promise;
};

gmapFactory.displayMap = function(mapContainer, placeId, location) {

    console.log(location);
    let elem =  angular.element(mapContainer).find('div');
      new google.maps.Marker(elem[0], {
        center: {lat: location.lat, lng: location.lng},
        zoom: 15
      });

    // google.maps.GeocoderRequest(elem, {
    //   address: placeId
    // })
};
  return gmapFactory;
};

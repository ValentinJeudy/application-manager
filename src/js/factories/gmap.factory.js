export default function gmapFactory($rootScope, $timeout, $http, $q, $sce){

let gmapFactory = {
  places: []
};


// console.log(user);


gmapFactory.getPlaces = function(placeSearched) {
  const defer = $q.defer();
  $http({
  method: 'GET',
  url: 'api/maps/api/place/autocomplete/json',
  params: {
    input: placeSearched,
    key: 'AIzaSyB3Am95OzAbKm9fAsXpaY_KUMoN-8TtRwI'
  },
  // headers: {
    // 'Authorization': undefined
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET",
  //   "Access-Control-Allow-Headers": "content-type"
  // },
  // mode: 'no-cors',
  responseType: 'json'
  // skipAuthorization: true
  })
  .then( function successCallback(res){
    console.log(gmapFactory.places, 'factory');
      gmapFactory.places = res.data.predictions;
      // $sce.trustAsResourceUrl(
      //   res.data.predictions
      // );
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

    let elem =  angular.element(mapContainer).find('div');
console.log(location);
      new google.maps.Map(elem[0], {
        center: {lat: location[0], lng: location[1]},
        zoom: 15
      });

    // google.maps.GeocoderRequest(elem, {
    //   address: placeId
    // })
};


  return gmapFactory;

};

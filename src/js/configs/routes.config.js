export default function routesConfig($routeProvider, $locationProvider){
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
    .when('/', {
      templateUrl: 'templates/login.html'
    })
    .when('/application', {
      templateUrl: 'templates/application.html'
    })
    .otherwise({redirectTo: '/' });
  };
  routesConfig.$inject = ["$routeProvider", "$locationProvider"];

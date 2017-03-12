import scss from '../scss/main.scss';
import angular from 'angular';
import angularRoute from 'angular-route';
import firebase from 'firebase';
import lodash from 'lodash';
import angularfire from 'angularfire';
import angularSimpleLogger from 'angular-simple-logger';
import uiGmapgoogleMaps from 'angular-google-maps';
import angularGooglePlaces from'angular-google-places-autocomplete';


import routesConfig from './configs/routes.config';
import authFactory from './factories/auth.factory';
import candFactory from './factories/candidatures.factory';
import loginCtrl from './controllers/login.controller';
import authRun from './run/auth.run';
import ngAutocomplete from './directives/gmapAutocomplete.directive';
import applicationCtrl from './controllers/application.controller';
import mainCtrl from './controllers/main.controller';


angular.module('TestApp', ["ngRoute", "firebase", "uiGmapgoogle-maps", "google.places"])
  .config(routesConfig)
  .factory("AuthFactory", authFactory)
  .factory("CandFactory", candFactory)
  .run(authRun)
  .directive("ngAutocomplete", ngAutocomplete)
  .controller("mainCtrl", mainCtrl)
  .controller("loginCtrl", loginCtrl)
  .controller("applicationCtrl", applicationCtrl)

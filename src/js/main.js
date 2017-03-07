import scss from '../scss/main.scss';
import angular from 'angular';
import angularRoute from 'angular-route';
import firebase from 'firebase';
import angularfire from 'angularfire';

import routesConfig from './configs/routes.config';
import authFactory from './factories/auth.factory';
import candFactory from './factories/candidatures.factory';
import loginCtrl from './controllers/login.controller';
import authRun from './run/auth.run';
import applicationCtrl from './controllers/application.controller';
import mainCtrl from './controllers/main.controller';


angular.module('TestApp', ["ngRoute", "firebase"])
  .config(routesConfig)
  .factory("AuthFactory", authFactory)
  .factory("CandFactory", candFactory)
  .run(authRun)
  .controller("mainCtrl", mainCtrl)
  .controller("loginCtrl", loginCtrl)
  .controller("applicationCtrl", applicationCtrl)

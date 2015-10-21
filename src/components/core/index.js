'use strict';
/**
 * @ngInject
 */
var ModuleName = 'core',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('CoreController', require('./controller/CoreController'))

  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;

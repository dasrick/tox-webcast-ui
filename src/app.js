'use strict';
/**
 * @ngInject
 */
var angular = require('angular');

require('angular-resource');
require('angular-translate');
require('angular-translate-loader-partial');
require('angular-ui-router');
require('mi24-player');

var requires = [
  'ngResource',
  'pascalprecht.translate',
  'ui.router',
  'Mi24HTMLPlayer',
  require('./components').name
];

angular.module('tox-webcast-ui-app', requires)

  // redirect for unknown routes ///////////////////////////////////////////////////////////////////////////////////////
  .config(function ($urlRouterProvider, $locationProvider, $resourceProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state;
      $state = $injector.get('$state');
      $state.go('app');
    });
    $resourceProvider.defaults.stripTrailingSlashes = true;
  })
  // ===================================================================================================================

  // translation stuff /////////////////////////////////////////////////////////////////////////////////////////////////
  .config(function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/i18n/{part}/{lang}.json'
    });
    // add translation table
    $translateProvider
      .registerAvailableLanguageKeys(['en', 'de'], {
        'en_*': 'en',
        'de_*': 'de'
      })
      .determinePreferredLanguage();

    /*
     The fallback language is not working ...
     $translateProvider.fallbackLanguage('en');
     The following workaround sets the preferred language to english,
     if the detection failed or the detected language is not known.
     */
    var language = $translateProvider.preferredLanguage();
    if ((language !== null) || !language.match(/(de).*/)) {
      return $translateProvider.preferredLanguage('de');
    }
  })
  // ===================================================================================================================

;

angular.bootstrap(document, ['tox-webcast-ui-app']);

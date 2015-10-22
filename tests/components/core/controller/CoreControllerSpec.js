'use strict';

var HeaderLeftController = require('../../../../src/components/core/controller/CoreController');

describe('Components:Core:Controller:CoreController', function () {

  var createController, $q, $rootScope, locals;

  beforeEach(function () {
    var fakeWindow = {VideoPlayerCollection: {addPlayerById: jasmine.createSpy()}};
    //angular.mock.module(function ($provide) {
    //  $provide.value('$window', fakeWindow);
    //});
    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      locals = {
        $window: fakeWindow
      };
      createController = function () {
        return $controller(HeaderLeftController, locals);
      };
    });
  });

  it('should init the Controller', function () {
    createController();
  });

});
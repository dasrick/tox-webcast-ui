'use strict';
/**
 * @ngInject
 */
module.exports = function ($window) {
  var vm = this;
  vm.appversion = process.env.appversion;

  //////////

  $window.VideoPlayerCollection.addPlayerById('live-stream-video');
};

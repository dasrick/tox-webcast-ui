'use strict';
/**
 * @ngInject
 */
module.exports = function () {
  var vm = this;
  vm.appversion = process.env.appversion;

  //////////

  window.VideoPlayerCollection.addPlayerById('live-stream-video');
};

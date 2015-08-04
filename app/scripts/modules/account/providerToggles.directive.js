'use strict';

let angular = require('angular');

module.exports = angular
  .module('spinnaker.account.providerToggle.directive', [
    require('./accountService.js')
  ])
  .directive('ifMultipleProviders', function(accountService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        accountService.listProviders().then(function(providers) {
          if (providers && providers.length && providers.length > 1) {
            elem.show();
          } else {
            elem.hide();
          }
        });
      }
    };
  })
  .directive('ifSingleProvider', function(accountService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        accountService.listProviders().then(function(providers) {
          if (!providers || !providers.length || providers.length === 1) {
            elem.show();
          } else {
            elem.hide();
          }
        });
      }
    };
  })
  .name;

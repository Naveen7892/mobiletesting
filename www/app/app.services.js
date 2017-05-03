// Testing app services

(function() {
'use strict';

  angular
    .module('testing')
    .factory('startupFactory', startupFactory);

  startupFactory.inject = [];
  function startupFactory() {
    var service = {
      initialize: initialize
    };
    
    return service;

    ////////////////
    function initialize() { 
      console.log("Success");
    }
  }
})();
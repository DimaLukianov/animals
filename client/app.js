$ = require('jquery');
jQuery = $;
require('foundation-sites/dist/foundation');
require('angular');
require('angular-route');
// Custom js
require('./assets/js/main.js');

angular.module('app', ['ngRoute'])

  .run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        // write current route
        $rootScope.currentPath = $location.path();
      });
    }])

  .config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "views/cats/index.html",
      controller: "CatsIndexController"
    })
    .when("/cats", {
      templateUrl: "views/cats/index.html",
      controller: "CatsIndexController"
    })
    .when("/dogs", {
      templateUrl: "views/dogs/index.html",
      controller: "DogsIndexController"
    })
    .when("/horses", {
      templateUrl: "views/horses/index.html",
      controller: "HorsesIndexController"
    })
    .when("/contact_us", {
      templateUrl: "views/contact_us/index.html",
      controller: "ContactUsIndexController"
    });
  });

require('./controllers/cats/index');
require('./controllers/dogs/index');
require('./controllers/horses/index');
require('./controllers/contact_us/index');
require('./directives/left_nav_bar_directive');

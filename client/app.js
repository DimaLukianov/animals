$ = require('jquery');
jQuery = $;
require('foundation-sites/dist/foundation');
require('angular');
// Custom js
require('./assets/js/main.js');

angular.module('app', []);
// .controller('MainController', ['$scope', MainController]);

$(document).foundation();

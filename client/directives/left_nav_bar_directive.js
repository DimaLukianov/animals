angular.module('app')
.directive('leftNavBar', function() {
  return {
    restrict: 'E',
    templateUrl: './views/partials/left_nav_bar.html',
    link: function(scope, element, attr) {
      $(document).foundation();
      }
    }
  }
);

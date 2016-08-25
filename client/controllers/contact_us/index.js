angular.module('app')
  .controller('ContactUsIndexController', ['$scope', '$http', function ($scope) {
    console.log('ContactUsController');
    $scope.form = {};

    $scope.formSubmit = function(){
      alert('submit');
    }
  }]);

angular.module('app')
  .controller('ContactUsIndexController', ['$scope', '$http', function ($scope, $http) {
    console.log('ContactUsController');
    $scope.info = {};

    $scope.formSubmit = function(info){
      console.log(info);
      $http.post('/api/contact_us', {info: info})
      .then(function(resp){
        alert('Success!');
      }, function(err){
        console.log(err);
        alert(err.data);
      });
    }
  }]);

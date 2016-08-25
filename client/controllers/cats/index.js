angular.module('app')
  .controller('CatsIndexController', ['$scope', '$http', function ($scope, $http) {
    console.log('CatsController');
    // Then you can do GET request to your API
    // and get animals list ($http.get(...);)
    $scope.animals = [
      {
        id: 1,
        name: 'Vasia',
        breed: 'Main Coon',
        weight: 2,
        color: 'gray',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://placekitten.com/300/300?image=1'
      },
      {
        id: 2,
        name: 'Vania',
        breed: 'Russian Blue',
        weight: 1,
        color: 'gray',
        description: 'Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://placekitten.com/300/300?image=2'
      },
      {
        id: 3,
        name: 'Pupkin',
        breed: 'Somali',
        weight: 3,
        color: 'gray',
        description: 'Consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://placekitten.com/300/300?image=3'
      },
      {
        id: 4,
        name: 'Gray',
        breed: 'Birman',
        weight: 2,
        color: 'gray',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://placekitten.com/300/300?image=4'
      },
      {
        id: 5,
        name: 'Disel',
        breed: 'Russian Blue',
        weight: 4,
        color: 'gray',
        description: 'Error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://placekitten.com/300/300?image=5'
      }
    ];
  }]);

angular.module('app')
  .controller('DogsIndexController', ['$scope', '$http', function ($scope) {
    console.log('DogsController');
    $scope.animals = [
      {
        id: 1,
        name: 'Rex',
        breed: 'Main Coon',
        weight: 21,
        color: 'gray',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/dog?random=1"'
      },
      {
        id: 2,
        name: 'Pit',
        breed: 'Blue',
        weight: 15,
        color: 'gray',
        description: 'Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/dog?random=2"'
      },
      {
        id: 3,
        name: 'Aza',
        breed: 'Somali',
        weight: 12,
        color: 'gray',
        description: 'Consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/dog?random=3"'
      },
      {
        id: 4,
        name: 'Black',
        breed: 'Birman',
        weight: 11,
        color: 'gray',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/dog?random=4"'
      },
      {
        id: 5,
        name: 'Disel',
        breed: 'Russian Blue',
        weight: 22,
        color: 'gray',
        description: 'Error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/dog?random=5"'
      }
    ];
  }]);

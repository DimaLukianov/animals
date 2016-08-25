angular.module('app')
  .controller('HorsesIndexController', ['$scope', '$http', function ($scope) {
    console.log('HorsesInexController');
    $scope.animals = [
      {
        id: 1,
        name: 'Fulminant',
        breed: 'Main',
        weight: 210,
        color: 'gray',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/horse?random=1"'
      },
      {
        id: 2,
        name: 'Amni',
        breed: 'Blue',
        weight: 150,
        color: 'gray',
        description: 'Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/horse?random=2"'
      },
      {
        id: 3,
        name: 'Aza',
        breed: 'Somali',
        weight: 125,
        color: 'gray',
        description: 'Consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/horse?random=3"'
      },
      {
        id: 4,
        name: 'Burbon',
        breed: 'Birman',
        weight: 311,
        color: 'gray',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi recusandae fugiat error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/horse?random=4"'
      },
      {
        id: 5,
        name: 'Qwery',
        breed: 'Russian Blue',
        weight: 222,
        color: 'gray',
        description: 'Error blanditiis, minus perferendis, amet, deserunt vitae vel eum delectus quos provident architecto ipsa voluptate voluptatem. Libero, quis qui.',
        image_url: 'http://loremflickr.com/300/300/horse?random=5"'
      }
    ];
  }]);

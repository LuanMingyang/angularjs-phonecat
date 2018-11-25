angular.module('phoneList')
  .directive('phoneList', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'modules/phone-list/phone-list.template.html',
      // controller: function PhoneListController($scope) {
      //   $scope.phones = [
      //     {
      //       name: 'Nexus S',
      //       snippet: 'Fast just got faster with Nexus S.',
      //       age: 1
      //     },
      //     {
      //       name: 'Motorola XOOM™ with Wi-Fi',
      //       snippet: 'The Next, Next Generation tablet.',
      //       age: 2
      //     },
      //     {
      //       name: 'MOTOROLA XOOM™',
      //       snippet: 'The Next, Next Generation tablet.',
      //       age: 3
      //     }
      //   ];
      // },
      // controller: ['$scope', '$http', function PhoneListController($scope, $http) {
      //   $scope.orderProp = 'age';
  
      //   $http.get('phones/phones.json').then(function(response) {
      //     $scope.phones = response.data;
      //   });
      // }],
      controller: ['$scope', 'Phone', function PhoneListController($scope, Phone) {
        $scope.orderProp = 'age';
        $scope.phones = Phone.query();
      }]
    }
  });
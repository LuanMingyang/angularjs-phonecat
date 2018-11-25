angular.module('phoneDetail')
  .directive('phoneDetail', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'modules/phone-detail/phone-detail.template.html',
      // controller: ['$scope', '$http', '$routeParams',
      //   function PhoneDetailController($scope, $http, $routeParams) {
      //     $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (data) {
      //       $scope.mainImageUrl = data.images[0];
      //     });
       
      //     $scope.setImage = function(imageUrl) {
      //       $scope.mainImageUrl = imageUrl;
      //     };
      //   }
      // ],
      controller: ['$scope', '$routeParams', 'Phone',
        function PhoneDetailController($scope, $routeParams, Phone) {
          $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (data) {
            $scope.mainImageUrl = data.images[0];
          });
       
          $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
          };
        }
      ],
    }
  });
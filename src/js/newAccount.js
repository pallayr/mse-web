angular.module('newAccountFrom', [])
    .controller('AccountController', ['$scope', function($scope) {
        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.submitForm = function() {
            if ($scope.signupform.$valid) {
                alert('form submitted');
            }
        };

        $scope.reset();
    }]);

'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);

phonecatControllers.controller('MainPageCtrl', function () {
});

phonecatControllers.controller('ContactsCtrl', function () {
});

phonecatControllers.controller('feedbackCtrl', ['$scope', '$routeParams', 'Feedback', function ($scope, $routeParams, Feedback) {
        $scope.feedbacks = Feedback.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.phoneId = $routeParams.phoneId;
        });
}]);

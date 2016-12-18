(function() {
    angular.module('perdeAchaApp.item').controller('itemDetailsController', function($scope, itemRepository, $stateParams) {

        itemRepository.details().then(function(obj) {
            $scope.item = obj;
        });

    });

})();

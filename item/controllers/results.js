(function () {
	angular.module('perdeAchaApp.item').controller('resultsController', function ($scope, itemRepository, $stateParams, $state) {


		itemRepository.results($stateParams.search, $stateParams.flagAdvancedSearch).then(function(obj) {
            $scope.itens = obj;
        });

        $scope.goToDetails = function (itemId) {
			$state.go('itemDetails', {id: itemId});
        }
	});	
})();

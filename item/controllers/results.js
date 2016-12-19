(function () {
	angular.module('perdeAchaApp.item').controller('resultsController', function ($scope, itemRepository) {

		itemRepository.results().then(function(obj) {
            $scope.itens = obj;
        });
	});	
})();

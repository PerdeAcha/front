(function () {
	angular.module('perdeAchaApp.item').controller('itemRegisterController', function ($scope, itemRepository, $state, $cookies) {

		$scope.save = function() {
      
                        
			if (!$scope.itemTitle) {
	            alert("Título inválido.");
	            return;
        	}
        	if (!$scope.description) {
	            alert("Descrição inválida.");
	            return;
        	}
        	if (!$scope.neighborhood) {
	            alert("Bairro inválido.");
	            return;
        	}

          alert("Modal simulando pagamento.");

        	itemRepository.register({
        		Title: $scope.itemTitle,
        		Description: $scope.description,
        		Localization: $scope.neighborhood,
        		Date: $scope.date,
        		Reward: $scope.reward
        	}).then( function (obj) {
        		$state.go('itemDetails', {id: obj.id});
        	});
		}
		
	});	
})();

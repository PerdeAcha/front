(function () {
	angular.module('perdeAchaApp.item').controller('itemRegisterController', function ($scope, itemRepository, $state) {

		$scope.save = function() {

                        
			// if (!$scope.itemTitle) {
	  //           alert("Título inválido.");
	  //           return;
   //      	}
   //      	if (!$scope.description) {
	  //           alert("Descrição inválida.");
	  //           return;
   //      	}
   //      	if (!$scope.localization) {
	  //           alert("Local inválida.");
	  //           return;
   //      	}

        	itemRepository.register({
        		Title: $scope.itemTitle,
        		Description: $scope.description,
        		Localization: $scope.localization,
        		Date: $scope.date,
        		Reward: $scope.reward
        	}).then( function (msg) {
        		$state.go('itemDetails', {id: msg.id});
        	});
		}
		
	});	
})();

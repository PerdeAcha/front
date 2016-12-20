(function () {	
	angular.module('perdeAchaApp.item').controller('searchController', function ($scope, itemRepository, $state) {

		 

		$scope.AdvancedSearch = function() {

			if (!$scope.searchWords) {
                alert("Campo de palavras-chave inválido.");
                return;
            }
            if (!$scope.neighborhood) {
                alert("Bairro inválido.");
                return;
            }
            if (!$scope.startDate) {
                alert("Data inicial inválida.");
                return;
            }
            if (!$scope.endDate) {
                alert("Data final inválida.");
                return;
            }

            var params = {
            		Search: $scope.searchWords,
            		Localization: $scope.neighborhood,
            		StartDate: $scope.startDate,
            		EndDate: $scope.endDate };
		 	$state.go('results', {
            	Search : params,
            	flagAdvancedSearch : true});
		 };
		
	});	
})();

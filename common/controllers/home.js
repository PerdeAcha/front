(function() {
    angular.module('perdeAchaApp.common').controller('homeController', function($scope, commonRepository, $state) {


        $scope.fastSearch = function() {

            if (!$scope.searchItem) {
                alert("Pesquisa inválida.");
                return;
            }
            $state.go('results', {
            	Search : $scope.searchItem,
            	flagAdvancedSearch : false});
        }

    });
})();

(function () {
	angular.module('perdeAchaApp.user').controller('registerController', function ($scope, userRepository) {

		$scope.save = function() {
			if (!$scope.name) {
	            alert("Nome inválido.");
	            return;
        	}
        	if (!$scope.email) {
	            alert("Email inválido.");
	            return;
        	}
        	if (!$scope.password) {
	            alert("Senha inválida.");
	            return;
        	}
        	if (!$scope.state) {
	            alert("Estado inválido.");
	            return;
        	}
        	if (!$scope.city) {
	            alert("Cidade inválida.");
	            return;
        	}

        	userRepository.register({
        		Name: $scope.name,
        		Email: $scope.email,
        		Password: $scope.password,
        		State: $scope.state,
        		City: $scope.city
        	}).then( function (msg) {
        		console.log(msg);
        	});
		}

		
	});	
})();

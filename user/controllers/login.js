(function () {
	angular.module('perdeAchaApp.user').controller('loginController', function ($scope, userRepository, $state) {
		$scope.login = function () {

			if (!$scope.email) {
	            alert("Email inválido.");
	            return;
        	}
			if (!$scope.password) {
	            alert("Senha inválida.");
	            return;
        	}

        	userRepository.login({
        		Email: $scope.email,
        		Password: $scope.password
        	}).then(function(response) {
        		if(response){
        			$state.go('home');
        		}
        	})





		};
	});	
})();

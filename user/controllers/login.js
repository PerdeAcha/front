(function () {
	angular.module('perdeAchaApp.user').controller('loginController', function ($scope, userRepository, $state, $cookies) {
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
        	}).then(function(obj) {
        		if(obj){
        			$cookies.put('token', obj.access_token);
        			$state.go('home');
        		}
        	}, function () {alert("Erro.")});





		};
	});	
})();

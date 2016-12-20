(function () {	
	angular.module('perdeAchaApp.user').service('userRepository', function ($http, $q) {
		
		this.register = function (obj) {
			return $http.post({
				url: 'http://localhost:5000/Account/Register',
				data: obj
			});
		};

		this.login = function (obj) {
			return $http.post({
				url: 'http://localhost:5000/connect/token',
				data: obj
			});

		};
	});	
})();

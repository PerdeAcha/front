(function () {	
	angular.module('perdeAchaApp.user').service('userRepository', function ($http, $q) {
		this.register = function (obj) {
			return $q.resolve(true); //enquanto nao tem api
			return $http.post({
				url: '/api/user/register',
				data: obj
			});
		};

		this.login = function (obj) {
			return $q.resolve(true); //enquanto nao tem api
			return $http.post({
				url: '/api/user/register',
				data: obj
			});

		};
	});	
})();

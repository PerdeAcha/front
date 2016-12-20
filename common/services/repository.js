(function () {	
	angular.module('perdeAchaApp.common').service('commonRepository', function ($http, $q) {
		
		this.fastSearch = function (obj) {
			return $q.resolve(true); //enquanto nao tem api
			return $http.post({
				url: '/api/item/search',
				data: obj
			});
		};


	
	});	
})();
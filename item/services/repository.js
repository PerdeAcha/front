(function () {	
	angular.module('perdeAchaApp.item').service('itemRepository', function ($http, $q) {
		this.register = function (obj) {
			return $q.resolve({id: 1});
			return $http.post({
				url: '/api/user/register',
				data: obj
			});
		};

		this.details = function() {
			return $q.resolve({
				Title: 'oi',
				Description: 'aaa',
				Date: '12/12/2016',
				Localization: 'sei la aonde',
				Reward: 3000
			});
			return $http.post({
				url: '/api/user/details',
				data: obj
			});
		};
	});	
})();
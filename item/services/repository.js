(function () {	
	angular.module('perdeAchaApp.item').service('itemRepository', function ($http, $q, $cookies) {
		

		this.register = function (obj) {
			var token = $cookies.get('token');
			//mock
			// return $q.resolve({id: 1});
			return $http.post({
				url: 'http://localhost:5000/api/item',
				data: obj,
				headers: {'Authorization' : "Bearer " + token}
			});
		};

		this.details = function(id) {
			// return $q.resolve({
			// 	Title: 'oi',
			// 	Description: 'aaa',
			// 	Date: '12/12/2016',
			// 	Localization: 'sei la aonde',
			// 	Reward: 3000
			// });
			return $http.post({
				url: 'http://localhost:5000//',
				data: id
			});
		};

		this.results = function(search, flagAdvancedSearch) {

			// var itens = [];
			// itens.push({
			// 	Title: 'oi',
			// 	Neighborhood: 'aqui',
			// 	Date: '12/12/2016',
			// 	Id: 1
			// });
			// itens.push({
			// 	Title: 'odsi',
			// 	Neighborhood: 'aqudsi',
			// 	Date: '12/12/2016',
			// 	Id: 2
			// });
			// itens.push({
			// 	Title: 'odsi',
			// 	Neighborhood: 'aqdsdsui',
			// 	Date: '12/12/2016',
			// 	Id: 3
			// });
			// return $q.resolve(itens);

			//sem mock
			//advancedSearch
			if(flagAdvancedSearch) {
				return $http.post({
				url: 'http://localhost:5000//',
				data: search
			});
			}
			//homeSearch
			else {
				return $http.get({
				url: 'http://localhost:5000/api/item?title=' + search,
				data: search
			});	
			}
		}
	});	
})();

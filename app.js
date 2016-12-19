(function () {
	var app = angular.module('perdeAchaApp', ['perdeAchaApp.user', 'perdeAchaApp.item' , 'perdeAchaApp.common', 'ui.router']);

	app.config(function ($stateProvider, $urlRouterProvider, $compileProvider) {
		$compileProvider.debugInfoEnabled(false);

		var login = {
			name: 'userLogin',
			url: '/login',
			templateUrl: 'user/views/login.html',
			controller: 'loginController'
		}

		var userRegister = {
			name: 'userRegister',
			url: '/usuario/cadastro',
		    templateUrl: 'user/views/register.html',
		    controller: 'registerController'
		};

		var search = {
			name: 'itemSearch',
			url: '/busca',
		    templateUrl: 'item/views/search.html'
		};

		var home = {
			name: 'home',
			url: '/',
		    templateUrl: 'common/views/home.html'
		};

		var itemRegister = {
			name: 'itemRegister',
			url: '/item/cadastro',
			templateUrl: 'item/views/register.html',
			controller: 'itemRegisterController'
		};

		var itemDetails = {
			name: 'itemDetails',
			url: '/item/detalhes/:id',
			templateUrl: 'item/views/details.html',
			controller: 'itemDetailsController'
		};

		var menu = {
			name: 'menu',
			url: '/menu',
			templateUrl: 'common/views/menu.html'
		};

		var results = {
			name: 'results',
			url: '/resultados',
			templateUrl: 'item/views/results.html',
			controller: 'resultsController'
		};

		$stateProvider.state(login);
		$stateProvider.state(userRegister);
		$stateProvider.state(search);
		$stateProvider.state(home);
		$stateProvider.state(itemRegister);
		$stateProvider.state(itemDetails);
		$stateProvider.state(menu);
		$stateProvider.state(results);

		$urlRouterProvider.otherwise('/');
	});
})();
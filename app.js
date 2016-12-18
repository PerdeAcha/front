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

		}

		$stateProvider.state(login);
		$stateProvider.state(userRegister);
		$stateProvider.state(search);
		$stateProvider.state(home);
		$stateProvider.state(itemRegister);
		$stateProvider.state(itemDetails);

		$urlRouterProvider.otherwise('/');
	});
})();
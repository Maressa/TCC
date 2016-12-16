angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/json.html',
			controller: 'JsonController'
		})

		.when('/canvas', {
			templateUrl: 'views/canvas.html',
			controller: 'CanvasController'	
		})

		.when('/json', {
			templateUrl: 'views/json.html',
			controller: 'JsonController'	
		});

	$locationProvider.html5Mode(true);

}]);
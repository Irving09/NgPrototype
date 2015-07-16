(function() {
	'use strict';

	angular
		.module('myApp.home', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'home/home.html',
				controller : 'HomeController',
				controllerAs : 'home'
			});
		}]);
})();
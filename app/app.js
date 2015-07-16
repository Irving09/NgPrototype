(function() {
	'use strict';

	var underscore = angular.module('underscore', []);
	underscore.factory('_', function() { return window._;});

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'myApp.home',
        'myApp.user'
    ]);
})();

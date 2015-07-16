(function() {
	'use strict';

	angular
		.module('myApp.user')
		.service('UserService', UserService);

	UserService.$inject = ['$http'];

	function UserService($http) {
		return {
			getUsers : function() {
				return $http.get('https://api.github.com/repositories?since=1000')
                    .then(function(response) {
                    	return _.unique(response.data, function(repo) {
                    		return repo.owner.login;
                    	});
                    }, function(errResponse) {
                        console.error('Error while fetching users: ', errResponse);
                        return errResponse;
                    });
			},
			getUserFollowersByLogin : function(login) {
				return $http.get('https://api.github.com/users/' + login + '/followers')
					.then(function(followers) {
						return _.pluck(followers.data, 'login');
					}, function(errResponse) {
						console.error('Error while fetching followers: ', errResponse);
                        return errResponse;
					});
			}
		};
	}
})();
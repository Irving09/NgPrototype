(function() {
	'use strict';

	angular
		.module('myApp.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['UserService'];

	function HomeController(UserService) {
		var home = this;
		home.showFollowers = false;
		UserService.getUsers().then(function(users) {
			home.users = users;
		});

		home.getUserFollowersById = function(login, index) {
			if (login[0].toLowerCase() === 'a') {
				UserService.getUserFollowersByLogin(login)
					.then(function(followers) {
						home.hoveredUser = followers.length > 0 ? 'followers:' : '0 followers';
						home.hoveredIndex = index;
						home.followers = followers;
						home.showFollowers = true;
					}, function(errResponse) {
						console.error('Error while fetching followers: ', errResponse);
                    return errResponse;
				});
			}
		};
	}
})();
angular.module('SA4Builder', ['ionic', 'ionicMultipleViews'])

	.run(function ($ionicPlatform) {
		$ionicPlatform.ready(function () {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	})

	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('apps', {
				url: '/apps',
				templateUrl: 'templates/apps.html',
				controller: 'AppListCtrl'
			})
			
			.state('appCards', {
				url: '/apps/:appId',
				templateUrl: 'templates/app-cards.html',
				controller: 'AppContentCtrl'
			})
			
			.state('masterDetail', {
				url: '/masterDetail',
				templateUrl: 'templates/app-cards-layout.html',
				abstract: true
			})
			
			.state('masterDetail.apps', { 
				url: '/apps',
				views: {
					'app-list': {
						templateUrl: 'templates/apps.html',
						controller: 'AppListCtrl'
					},
					
					'app-cards': {
						templateUrl: 'templates/app-cards.html',
						controller: 'AppContentCtrl'
					}
				}
			});

		$urlRouterProvider.otherwise('/masterDetail/apps');
	});


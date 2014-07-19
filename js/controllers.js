angular.module('SA4Builder')

	.controller('AppListCtrl', function ($scope, $state, $location, MultipleViewsManager, AppService) {
		$scope.apps = AppService.allApps();
		$scope.selectedAppId = 0;	
		$scope.appSetId = $location.search().AppSetId;
		

		
		if (MultipleViewsManager.isActive()) {
			MultipleViewsManager.updateView('app-cards', { appId: $scope.selectedAppId });
		}

		$scope.changeApp = function (app) {
			$scope.selectedAppId = app.AppId;
			console.log(MultipleViewsManager.isActive());
			if (MultipleViewsManager.isActive()) {
				MultipleViewsManager.updateView('app-cards', { appId: app.AppId });
			} else {
				$state.go('appCards', { appId: app.AppId });
			}
		};
	})

	.controller('AppContentCtrl', function ($scope, $stateParams, MultipleViewsManager, AppService) {
		$scope.app = AppService.getApp($stateParams.appId);

		MultipleViewsManager.updated(function (params) {
			$scope.app = AppService.getApp(params.appId);
		});
	});

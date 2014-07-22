angular.module('SA4Builder.controllers', [])

  .controller('MenuCtrl', function ($scope, AppService) {
    console.log('menu controller');
    $scope.data = {};
    $scope.data.appsets = AppService.allAppSets();
  })

  .controller('SubMenuCtrl', function ($scope, $stateParams, AppService) {
    $scope.data = {};
    $scope.data.selectedAppSetId = $stateParams.AppSetId;
    $scope.data.apps = AppService.allApps();
  })

  .controller('MainContentCtrl', function ($scope, $stateParams, AppService) {
    console.log('main content controller');
    $scope.data = {};
    $scope.data.selectedAppId = $stateParams.AppId;
    $scope.data.cards = AppService.allCards();
  });

angular.module('SA4Builder')
	/**
	 * A simple example service that returns some data.
	 */
	.factory('AppService', function () {
		// Some fake testing data

		var appsets = [
			{AppSetId: 0, Name: 'Discrete Mfg - Reps', Description: 'AppSet for reps at discrete manufacguring', Status: 'Design', Version: '0.01'},
			{AppSetId: 1, Name: 'Discrete Mfg - Mgr', Description: 'AppSet for Mgrs at discrete manufacguring', Status: 'Design', Version: '0.01'},
			{AppSetId: 2, Name: 'Financial Services - Reps', Description: 'AppSet for reps at discrete manufacguring', Status: 'Design', Version: '0.01'}
		];

		var apps = [
			{AppId: 0, AppSetId: 0, Name: 'App1', Description: 'App1 Description', Status: 'Design', Version: '0.01', Icon: 'http://ionicframework.com/img/docs/venkman.jpg'},
			{AppId: 1, AppSetId: 1, Name: 'App2', Description: 'App1 Description', Status: 'Design', Version: '0.01', Icon: 'http://ionicframework.com/img/docs/stantz.jpg'},
			{AppId: 2, AppSetId: 2, Name: 'App3', Description: 'App1 Description', Status: 'Design', Version: '0.01', Icon: 'http://ionicframework.com/img/docs/spengler.jpg'},
			{AppId: 3, AppSetId: 2, Name: 'App4', Description: 'App1 Description', Status: 'Design', Version: '0.01', Icon: 'http://ionicframework.com/img/docs/winston.jpg'},
			{AppId: 4, AppSetId: 1, Name: 'App5', Description: 'App1 Description', Status: 'Design', Version: '0.01', Icon: 'http://ionicframework.com/img/docs/tully.jpg'},
			{AppId: 5, AppSetId: 0, Name: 'App6', Description: 'App1 Description', Status: 'Design', Version: '0.01', Icon: 'http://ionicframework.com/img/docs/barrett.jpg'}
		];

		var cards = [
			{CardId: 0, AppId: 0, Name: 'Card1', Type: 'Type 1', Content: 'Card1 Content'},
			{CardId: 1, AppId: 1, Name: 'Card2', Type: 'Type 2', Content: 'Card2 Content'},
			{CardId: 2, AppId: 0, Name: 'Card3', Type: 'Type 3', Content: 'Card3 Content'},
			{CardId: 3, AppId: 2, Name: 'Card4', Type: 'Type 1', Content: 'Card4 Content'},
			{CardId: 4, AppId: 2, Name: 'Card5', Type: 'Type 2', Content: 'Card5 Content'},
			{CardId: 5, AppId: 1, Name: 'Card6', Type: 'Type 2', Content: 'Card6 Content'},
			{CardId: 6, AppId: 3, Name: 'Card7', Type: 'Type 1', Content: 'Card7 Content'},
			{CardId: 7, AppId: 4, Name: 'Card8', Type: 'Type 3', Content: 'Card8 Content'},
			{CardId: 8, AppId: 5, Name: 'Card9', Type: 'Type 1', Content: 'Card9 Content'}
		];
		

		return {
			allApps: function() {
				return apps;
			},
			allCards: function(){
				return cards;
			},
			getAppSet: function (appSetId) {
				return appSets[appSetId]
			},
			getApp: function (appId) {
				// Simple index lookup
				return apps[appId];
			}
		}
	});

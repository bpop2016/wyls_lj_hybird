// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//starter 类名，ionic、starter.controllers依赖类名
//ionic-datepicker :日期插件
angular.module('starter', [ 'ionic', 'starter.controllers','starter.services',
                            'starter.routes','ionic-datepicker','monospaced.elastic'])

//main函数，第一个被执行
.run(function($ionicPlatform) {
	//
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			//ionic-plugin-keyboard 键盘插件，就是让 app 里的输入框能弹出键盘的。
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			//状态栏默认样式，也就是电池信号黑色；
			StatusBar.styleDefault();
		}
	});
	
})

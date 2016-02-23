angular.module('starter.routes', [])

  //模块的加载阶段，AngularJS会在提供者注册和配置的过程中对模块进行配置
  .config(function ($stateProvider, $urlRouterProvider) {

    //路由管理，总体控制页面加载，其核心是状态机 - 状态对应页面
    $stateProvider
      //首页
      .state('main', {
        url: "/main",
        views: {
          'menuContent': {
            templateUrl: "views/main.html",
            controller: 'MainCtrl'
          }
        }
      })
      //侧滑菜单
      .state('main.menu', {
        url: "/menu",
        abstract: true,
        templateUrl: "views/menu.html",
        controller: 'MenuCtrl'
      })

    //不在路由内的处理方式
    $urlRouterProvider.otherwise('/main');
  });

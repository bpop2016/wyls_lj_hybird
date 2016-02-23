angular.module('starter.controllers', [])

  //$scope作用域，$ionicModal ionic模型，可以遮住用户主界面的内容框。
  .controller('MenuCtrl', function ($scope, $ionicModal, $timeout) {

  })

  .controller('MainCtrl', ['$scope', '$ionicActionSheet', '$state', function ($scope, $ionicActionSheet, $state) {
    $scope.showCasesType = function () {
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          {text: '侵权纠纷(在线咨询)',},
          {text: '保险纠纷(律师详情)'},
          {text: '刑事案件'},
          {text: '劳动争议'},
          {text: '合同纠纷'},
          {text: '知识产权'},
          {text: '房产纠纷'},
          {text: '人格权'}
        ],
        destructiveText: 'Delete',
        titleText: '请选择您要咨询的类别',
        cancelText: 'Cancel',
        cancel: function () {
          // add cancel code..
        },
        buttonClicked: function (index) {
          if (index == 0) {
            $state.go('app.question');
          }
          else if (index == 1) {
            $state.go('app.looklawyerdetail');
          }

          return true;
        }
      });

      /*$timeout(function() {
       hideSheet();
       }, 2000);*/

    };

    $scope.question_input = function () {
      $state.go('app.question');
    };

    $scope.laywer_list = function () {
      $state.go('app.laywerList');
    };

  }])

  .controller('LookLawyerDetailCtrl', ['$scope', '$ionicActionSheet', '$state', function ($scope, $ionicActionSheet, $state) {
    $scope.showServiceType = function () {
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          {text: '在线咨询(30元/次)'},//后台读数据
          {text: '预约面谈(300元/小时)'},//后台读数据
          {text: '案件委托(面议)'}
        ],
        titleText: '请选择您需要的服务',
        cancelText: '取消',
        cancel: function () {
          // add cancel code..
        },
        buttonClicked: function (index) {
          if (index == 0) {
            $state.go('app.question');
          }
          else if (index == 1) {
            $state.go('app.appointmentchoosedetail');
          }
          else if (index == 2) {
            $state.go('app.looklawyerdetail');
          }
          return true;
        }
      });
    };
  }])

  .controller('AppointmentDetailCtrl', ['$scope', '$state', function ($scope, $state) {
    //不可选择日期
    var disabledDates = [
      new Date(1437719836326),
      new Date(),
      new Date(2015, 7, 10), //months are 0-based, this is August, 10th!
      new Date('Wednesday, August 12, 2015'), //Works with any valid Date formats like long format
      new Date("08-14-2015"), //Short format
      new Date(1439676000000) //UNIX format
    ];

    $scope.datepickerObject = {
      titleLabel: '请选择日期',  //Optional
      todayLabel: '今天',  //Optional
      closeLabel: '关闭',  //Optional
      setLabel: '设置',  //Optional
      setButtonType: 'button-assertive',  //Optional
      todayButtonType: 'button-assertive',  //Optional
      closeButtonType: 'button-assertive',  //Optional
      inputDate: new Date(),  //Optional
      mondayFirst: true,  //Optional
      disabledDates: disabledDates, //Optional
      weekDaysList: ["六", "日", "一", "二", "三", "四", "五"], //Optional
      monthList: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], //Optional
      templateType: 'popup', //Optional
      showTodayButton: 'true', //Optional
      modalHeaderColor: 'bar-positive', //Optional
      modalFooterColor: 'bar-positive', //Optional
      from: new Date(), //Optional
      to: new Date(2018, 8, 25),  //Optional
      callback: function (val) {  //Mandatory
        if (val) {
          $scope.datepickerObject.inputDate = val;
        }
      },
      dateFormat: 'yyyy年MM月dd日', //Optional
      closeOnSelect: false, //Optional
    };

    $scope.orderpay = function () {
      $state.go('app.orderpay');
    };
  }])

  .controller('OrderPayCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.paysuccess = function () {
      $state.go('app.paysuccess');
    };
  }])

  .controller('UserAccountsCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.paysuccess = function () {
      $state.go('app.paysuccess');
    };
  }])

  .controller('UserConsultationsCtrl', ['$scope', '$state', function ($scope, $state) {

  }])

  .controller('UserAppointmentsCtrl', ['$scope', '$state', function ($scope, $state) {

  }])

  .controller('PersonalLaywerListCtrl', function ($scope, $http, lawyersService) {
    var url = "";
    if (ionic.Platform.isAndroid()) {
      url = "/android_asset/www/";
    }

    $http.get(url + "data/json/lawyers.json").then(function (response) {
      //lawyersService.init(response.data.lawyers);
      $scope.lawyers = response.data.lawyers;
    });

    $scope.score_arr = [1, 2, 3, 4, 5];
  })

  .controller('UserSettingCtrl', ['$scope', '$state', function ($scope, $state) {

  }])

  .controller('UserSetNicknameCtrl', ['$scope', '$state', function ($scope, $state) {

  }])

  .controller('UserSetPasswordCtrl', ['$scope', '$state', function ($scope, $state) {

  }])

  .controller('UserSetPhoneCtrl', ['$scope', '$state', function ($scope, $state) {

  }])


  .controller('QuestionCtrl', function ($scope) {
  })


  .controller('LaywerListCtrl', function ($scope, $http, lawyersService) {
    var url = "";
    if (ionic.Platform.isAndroid()) {
      url = "/android_asset/www/";
    }

    $http.get(url + "data/json/lawyers.json").then(function (response) {
      //lawyersService.init(response.data.lawyers);
      $scope.lawyers = response.data.lawyers;
    });

    $scope.score_arr = [1, 2, 3, 4, 5];
  })

  .controller('MessageDetailCtrl', function ($scope, $http, $state, $ionicPopup) {
    $scope.$on("$ionicView.beforeEnter", function () {
      var url = "";
      if (ionic.Platform.isAndroid()) {
        url = "/android_asset/www/";
      }
      $http.get(url + "data/json/message.json?id=1").then(function (response) {
        $scope.msgInfo = response.data;
      });
    });
  })
;

'use strict';

/**
 * @ngdoc overview
 * @name nbahackathonApp
 * @description
 * # nbahackathonApp
 *
 * Main module of the application.
 */
angular
  .module('nbahackathonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

// SHOW MODAL ON PAGE LOAD. OPEN IT AGAIN WITH i IN TOP RIGHT

angular.module('nbahackathonApp')
  .controller('MainCtrl', ["$scope", function ($scope) {

  	$scope.curQuarter = 1;
  	$scope.curTime = "12:00"; 


  	$scope.liveGames = [
  		{
	  		HomeT: "Los Angeles Lakers",
	  		AwayT: "Houston Rockets"
  		},
  		{
	  		HomeT: "Dallas Mavericks",
	  		AwayT: "San Antonio Spurs"
  		},
  		{
	  		HomeT: "Boston Celtics",
	  		AwayT: "Brooklyn Nets"
  		}
  	];

  	$scope.currentGame = $scope.liveGames[0]; // Default to first game in list
  	$scope.selectedTeam = $scope.currentGame.HomeT; // Default to home team

  	$scope.startquarter = function() {
  		$scope.curQuarter = $scope.curQuarter + 1;
  	};

  	// Choose a game from sidebar
  	$scope.chooseGame = function(index) {
  		$scope.currentGame = $scope.liveGames[index];
  		$scope.selectedTeam = $scope.currentGame.HomeT;
  	};

  	$scope.selectTeam = function(teamName) {
  		$scope.selectedTeam = teamName;
  	};

  	$scope.getTeamName = function(fullName) {
  		var n = fullName.split(" ");
    	return n[n.length - 1];
  	};


  }]);

'use strict';

/**
 * @ngdoc function
 * @name nbahackathonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nbahackathonApp
 */
angular.module('nbahackathonApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('nbahackathonApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"header\"> <img ng-src=\"/images/nba-logo-small.png\"> <h3 class=\"title\">NBA Hackathon 2016</h3> <div class=\"navbar\"> </div> <div class=\"projTitle\"> <div class=\"ttlTxt\">PROJECT TITLE</div> </div> </div> <div class=\"gamesNav\"> <div class=\"gamesNavTitle\">Live Games</div> <div class=\"gamesNavList\"> <div class=\"gameListing\" ng-repeat=\"g in liveGames\" ng-click=\"chooseGame($index)\" ng-class=\"{activeGame: $index}\"> <div>{{g.HomeT}}</div> <div>vs.</div> <div>{{g.AwayT}}</div> </div> </div> </div> <div class=\"mainDashboard\"> <div class=\"dashboardTitle\"> <div class=\"TeamTab\" ng-repeat=\"t in currentGame\" ng-class=\"{activeTeam: t === selectedTeam}\" ng-click=\"selectTeam(t)\"> <div class=\"TeamTabTitle\">{{getTeamName(t)}}</div> </div> <div class=\"gameClock\">{{curTime}} {{curQuarter}}Q</div> </div> </div>"
  );

}]);

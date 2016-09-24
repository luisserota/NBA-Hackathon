'use strict';

angular.module('nbahackathonApp')
  .controller('MainCtrl', function ($scope) {

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


  });

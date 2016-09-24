'use strict';

// In real practice:
// Clock would be running, and after every second goes by the regression analysis
//  would be rerun using the new play by play inputs and resulting data would be reflected

angular.module('nbahackathonApp')
  .controller('MainCtrl', function ($scope, ngDialog) {

  	$scope.curQuarter = 3;
  	$scope.curTime = "11:12";
  	$scope.curPC_Time = 6720;
  	$scope.curTeams = []

  	$scope.callTO = 14;
  	$scope.dontCallTO = 86;

  	$scope.liveGames = [game1, game2, game3, game4];

  	$scope.startquarter = function() {
  		$scope.curQuarter = $scope.curQuarter + 1;
  	};

  	$scope.determineTO = function(value) {
  		if ($scope.selectedTeam == $scope.curTeams[0]) // if home team do nothing
  			return value;
  		return 100 - value;
  	}

  	$scope.determineTrend = function(ary) {
  		if ($scope.selectedTeam == $scope.curTeams[0])
  			return ary;
  		else {
  			var newAry = [];
  			for (var i = 0; i < ary.length; i++) {
  				var temp = ary[i];

  				if (Math.sign(temp) == 1) {
  					newAry.push(-Math.abs(temp));
  				}
  				else {
  					newAry.push(Math.abs(temp));
  				}
  			}
  			return newAry;
  		}
  	}

  	$scope.drawGraphs = function() {
  		// Timeout Score
  		$(function () {
			    $('#timeoutScore').highcharts({
			    	exporting: {
			    		enabled: false
			    	},
			    	credits: {
			    		enabled: false
			    	},
			        chart: {
			            plotBackgroundColor: 'black',
			            plotBorderWidth: 0,
			            plotShadow: false,
			            style: {
			            	borderColor: 'black'
			            }
			        },
			        title: {
			            text: 'Timeout Score',
			            align: 'center',
			            verticalAlign: 'middle',
			            x: 0,
			            y: -75,
			            style: {
			            	color: 'white'
			            }
			        },
			        tooltip: {
			            pointFormat: 'Score: <b>{point.percentage:.1f}%</b>'
			        },
			        plotOptions: {
			            pie: {
			                dataLabels: {
			                    enabled: true,
			                    distance: -50,
			                    style: {
			                        fontWeight: 'bold',
			                        color: 'white',
			                        textShadow: '0px 1px 2px black'
			                    }
			                },
			                startAngle: -90,
			                endAngle: 90,
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'Timeout Score',
			            innerSize: '50%',
			            data: [
			                ['Call TO', $scope.determineTO($scope.callTO)],
			                ["Don't Call TO", $scope.determineTO($scope.dontCallTO)],
			                {
			                    name: 'Proprietary or Undetectable',
			                    y: 0.2,
			                    dataLabels: {
			                        enabled: false
			                    }
			                }
			            ]
			        }]
			    });
			});
	  	
	  		$(function () {
			    $('#momentumTrend').highcharts({
			    	exporting: {
			    		enabled: false
			    	},
			    	credits: {
			    		enabled: false
			    	},
			        title: {
			            text: 'Acceleration Trend',
			            x: -20 //center
			        },
			        subtitle: {
			            text: '',
			            x: -20
			        },
			        xAxis: {
			            categories: ['12:00', '11:43', '11:40', '11:33', '11:30']
			        },
			        yAxis: {
			            title: {
			                text: 'Acceleration'
			            },
			            plotLines: [{
			                value: 0,
			                width: 1,
			                color: '#808080'
			            }]
			        },
			        legend: {
			            layout: 'vertical',
			            align: 'right',
			            verticalAlign: 'middle',
			            borderWidth: 0
			        },
			        series: [{
			            name: $scope.selectedTeam,
			            data: $scope.determineTrend([0, -0.2, -0.19, 0.1, 0.2])
			        }]
			    });
			});
  	};

  	// Choose a game from sidebar, reset time
  	$scope.chooseGame = function(index) {

  		$scope.curTime = "11:12";

  		$scope.currentGame = $scope.liveGames[index]; // Set the current game

  		$scope.curTeams = [$scope.currentGame[0].Home_Team, $scope.currentGame[0].Away_Team]; // set the array of current teams

  		$scope.selectedTeam = $scope.curTeams[0]; // Set the selected team to default to home
  	
  		// Start Timing
  		$scope.drawGraphs();
	  	};

  	// Set the default chosen game to the first game in list
  	$scope.chooseGame(2);

  	$scope.selectTeam = function(teamName) {
  		$scope.selectedTeam = teamName;
  		$scope.drawGraphs();
  	};

  	$scope.getTeamName = function(fullName) {
  		var n = fullName.split(" ");
    	return n[n.length - 1];
  	};

  	$scope.openInfoDialog = function() {
        ngDialog.open({ 
        	template: 'instructions', 
        	className: 'ngdialog-theme-default' 
        });
  	};

  	$scope.timeConvert = function() {
  		return $scope.curTime
  	};

  	$scope.playByPlayFilter = function(PC_Time) {
  		return function(item){
  			return nullnull; 
  		}
  	}


  });

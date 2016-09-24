angular.module('nbahackathonApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<img class=\"infoButton\" src=\"/images/infoicon.png\" ng-click=\"openInfoDialog($event)\"> <div class=\"header\"> <img ng-src=\"/images/nba-logo-small.png\"> <h3 class=\"title\">NBA Hackathon 2016</h3> <div class=\"navbar\"> </div> <div class=\"projTitle\"> <div class=\"ttlTxt\">Timeout Assist</div> </div> </div> <div class=\"gamesNav\"> <div class=\"gamesNavTitle\">Live Games</div> <div class=\"gamesNavList\"> <div class=\"gameListing\" ng-repeat=\"g in liveGames\" ng-click=\"chooseGame($index)\" ng-class=\"{activeGame: g[0].Home_Team === curTeams[0]}\"> <div>{{g[0].Home_Team}}</div> <div>vs.</div> <div>{{g[0].Away_Team}}</div> </div> </div> </div> <div class=\"mainDashboard\"> <div class=\"dashboardTitle\"> <div class=\"TeamTab\" ng-repeat=\"t in curTeams\" ng-class=\"{activeTeam: t === selectedTeam}\" ng-click=\"selectTeam(t)\"> <div class=\"TeamTabTitle\">{{getTeamName(t)}}</div> </div> <div class=\"gameClock\">{{timeConvert(curTime)}} {{curQuarter}}Q</div> </div> <div class=\"dashboardBody\"> <div> <div id=\"timeoutScore\" class=\"timeoutScoreGraph\" style=\"min-width: 310px; height: 220px; max-width: 400px; width:400px; margin: 0 auto\" class=\"timeoutScore\"></div> </div> <div> <div id=\"momentumTrend\" class=\"momentumTrendGraph\" style=\"min-width: 370px; height: 219px; width:400px; margin: 0 auto\"></div> </div> <div class=\"feed\"> <div class=\"playListing\" ng-repeat=\"p in currentGame.slice().reverse()\"> <p ng-if=\"(p.PC_Time >= curPC_Time && p.Period <= curQuarter) || (p.Period < curQuarter)\">{{p.Description}}</p> </div> </div> </div> </div> <script type=\"text/ng-template\" id=\"instructions\"><h1>FAQ: Timeout Assist</h1>\n" +
    "    <p>Choose a live game by clicking on a game in the \"Live Games\" section</p>\n" +
    "    <p>Choose between the 2 live teams by hovering over and clicking on the team name</p>\n" +
    "    <p>The \"Timeout Score\" recommends the active team to either call or not call a timeout</p>\n" +
    "    <p>The \"Momentum Graph\" displays the active team's current momentum based on acceleration</p>\n" +
    "    <p>The play by play updates are are in real time</p> \n" +
    "    <h5 style=\"font-weight:bold;\">Explanation of algorithms we developed for determining Timeout Score and Acceleration in PowerPoint</h5></script>"
  );

}]);

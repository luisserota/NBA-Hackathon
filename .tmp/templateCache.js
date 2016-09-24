angular.module('nbahackathonApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"header\"> <img ng-src=\"/images/nba-logo-small.png\"> <h3 class=\"title\">NBA Hackathon 2016</h3> <div class=\"navbar\"> </div> <div class=\"projTitle\"> <div class=\"ttlTxt\">PROJECT TITLE</div> </div> </div> <div class=\"gamesNav\"> <div class=\"gamesNavTitle\">Live Games</div> <div class=\"gamesNavList\"> <div class=\"gameListing\" ng-repeat=\"g in liveGames\" ng-click=\"chooseGame($index)\" ng-class=\"{activeGame: $index}\"> <div>{{g.HomeT}}</div> <div>vs.</div> <div>{{g.AwayT}}</div> </div> </div> </div> <div class=\"mainDashboard\"> <div class=\"dashboardTitle\"> <div class=\"TeamTab\" ng-repeat=\"t in currentGame\" ng-class=\"{activeTeam: t === selectedTeam}\" ng-click=\"selectTeam(t)\"> <div class=\"TeamTabTitle\">{{getTeamName(t)}}</div> </div> <div class=\"gameClock\">{{curTime}} {{curQuarter}}Q</div> </div> </div>"
  );

}]);

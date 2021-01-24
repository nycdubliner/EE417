const teamCodes  = {
    'ATL': 'Atlanta Hawks',
    'BRK': 'Brooklyn Nets',
    'BOS': 'Boston Celtics',
    'CHO': 'Charlotte Hornets',
    'CHI': 'Chicago Bulls',
    'CLE': 'Cleveland Cavaliers',
    'DAL': 'Dallas Mavericks',
    'DEN': 'Denver Nuggets',
    'DET': 'Detroit Pistons',
    'GSW': 'Golden State Warriors',
    'HOU': 'Houston Rockets',
    'IND': 'Indiana Pacers',
    'LAC': 'Los Angeles Clippers',
    'LAL': 'Los Angeles Lakers',
    'MEM': 'Memphis Grizzlies',
    'MIA': 'Miami Heat',
    'MIL': 'Milwaukee Bucks',
    'MIN': 'Minnesota Timberwolves',
    'NOP': 'New Orleans Pelicans',
    'NYK': 'New York Knicks',
    'OKC': 'Oklahoma City Thunder',
    'ORL': 'Orlando Magic',
    'PHI': 'Philadelphia 76ers',
    'PHO': 'Phoenix Suns',
    'POR': 'Portland Trail Blazers',
    'SAC': 'Sacramento Kings',
    'SAS': 'San Antonio Spurs',
    'TOR': 'Toronto Raptors',
    'UTA': 'Utah Jazz',
    'WAS': 'Washington Wizards',
}

function renderTeams(data) {
  var closeGames = []
  var text = ""
  var i
  for (i = (data.length - 1); i >=0; i--) {
    var game = data[i]
    // Was the winning margin less than 10? 
    // Greater than 0 confirms the game took place.
    if ((Math.abs(game['score1'] - game['score2']) < 10) &&
       (Math.abs(game['score1'] - game['score2']) > 0)) {
         closeGames.push(game)
    }          
  }
  // Get most recent game day
  gameDay = closeGames[0]['date']
  // Format the Output.
  for (j = 0; j < closeGames.length; j++) {
    var game = closeGames[j]
    if (game['date'] == gameDay) {
      text += teamCodes[game['team1']] + " @ " +
              teamCodes[game['team2']] + " " +
              "<br>";
    }
  }
  document.getElementById("teams").innerHTML = text;
}

fetch('/nba_elo.json')
.then(response => response.json())
.then(data => renderTeams(data));


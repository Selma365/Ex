const team = {
  _players: [ {firstName: 'Pete', lastName: 'Wheeler',  age: 54},
              {firstName: 'Selma', lastName: 'Br',  age: 24},
              {firstName: 'Oliva', lastName: 'Vitsc',  age: 34}
      ],
  _games: [{opponent: 'Broncos',teamPoints: 42,opponentPoints: 27},
          {opponent: 'Sloboda',teamPoints: 55,opponentPoints: 17},
         { opponent: 'Rk',teamPoints: 15,opponentPoints: 37}
  ],

  get players(){
      return this._players;
  },
  get games(){
      return this._games;
  },
  addPlayer(firstName,lastName,age){
    const player={
      name:firstName,
      last:lastName,
      age:age
    }
    this.players.push(player);
  },
  addGame(opponent,teamPoints,opponentPoints){
    const game={
      opponent:opponent,
      teamPoints:teamPoints,
      opponentPoints:opponentPoints
    }
    this.games.push(game);
  }

};
team.addPlayer('Steph ' ,'Curry ', 28);
team.addPlayer('Lisa ' ,'Leslie', 44);
team.addPlayer('Bugs' ,'Bunny ',76);
team.addGame("slo",50,50);
team.addGame("bih",100,10000);
console.log(team.players);
console.log(team.games);

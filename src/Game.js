import domUpdates from './domUpdates.js';
import data from './data.js';
import Question from './Question.js';
import Round from './Round.js';
import Categories from './Categories.js';
import Player from './Player.js';




class Game {
  constructor() {
    this.players = [];
    this.allData = [[], [], [], [], [], [], [], [], [], []];
    this.round = new Round();
    this.player = new Player();
    this.currentPlayer = 29;
  }

  startGame() {
    domUpdates.hideStartScreen();
    let names = domUpdates.grabNames();
    this.createPlayers(names);
    this.getRandomData();
    this.round.sortRounds(this.allData);
    this.updatePlayerTurn();
  }


  getRandomData() {
    this.allData.forEach((cat, ind) => {
      data.clues.forEach(clue => { 
        if (clue.categoryId === (ind + 1)) {
          cat.push(clue);
        }
      })
    });
    this.shuffle(this.allData).forEach(cat => this.shuffle(cat));
  }

  shuffle(a) {
    return a.sort(() => 0.5 - Math.random());
  }

  createPlayers(names) {
    let player1 = new Player(names[0], 0);
    let player2 = new Player(names[1], 0);
    let player3 = new Player(names[2], 0);
    this.players.push(player1);
    this.players.push(player2);
    this.players.push(player3);
    console.log('gamePlayers', this.players);
  }

  updatePlayerTurn() {
    if (this.currentPlayer > 31) {
      this.currentPlayer = 30
    } else {
      this.currentPlayer++;
    }
    domUpdates.playerTurn(this.currentPlayer);
  }  
}


export default Game;

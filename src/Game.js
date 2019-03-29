import domUpdates from './domUpdates.js';
import data from './data.js';
import Round from './Round.js';
import Player from './Player.js';
import $ from 'jquery';

class Game {
  constructor() {
    this.players = [];
    this.allData = [[], [], [], [], [], [], [], [], [], []];
    this.round = new Round();
    this.currentPlayer = {};
    this.playerIndex = 0;
    this.wrongImages = [];
    this.correctImages = [];
  }

  startGame(game) {
    domUpdates.hideStartScreen();
    let names = domUpdates.grabNames();
    this.createPlayers(names);
    this.getRandomData();
    this.round.sortRounds(this.allData);
    this.updatePlayerTurn();
    this.grabImages();
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
    let player1 = new Player(names[0], 0, "https://i.imgur.com/o1IfnLG.jpg");
    let player2 = new Player(names[1], 0, "https://i.imgur.com/O7Q5jfR.jpg?1");
    let player3 = new Player(names[2], 0, "https://i.imgur.com/c7Bfxuq.jpg");
    this.players.push(player1);
    this.players.push(player2);
    this.players.push(player3);
  }

  updatePlayerTurn() {
    this.currentPlayer = this.players[this.playerIndex];
    domUpdates.playerTurn(this);
    if (this.playerIndex === 2) {
      this.playerIndex = 0;
      return
    }
    this.playerIndex++;
  }

  grabImages() {
    const wrongImages = Object.keys(data.wrongImg).map(url => {
      return url;
    });
    const correctImages = Object.keys(data.correctImg).map(url => {
      return url;
    })
    this.wrongImages = wrongImages;
    this.correctImages = correctImages;
  }

  getImageTag(images) {
    let img = '<img src="';
    let randomIndex = Math.floor(Math.random() * images.length);
    img += images[randomIndex];
    img += '" alt="Wrong">';
    domUpdates.appendPhoto(img);
  }

  reset() {
    domUpdates.resetGame();
  }
}


export default Game;

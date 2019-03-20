import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.players = [];
  }
  startGame() {
    domUpdates.hideStartScreen();
    let names = domUpdates.grabNames();
    this.players.push(names);
  }
}


export default Game;

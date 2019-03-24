import domUpdates from './domUpdates.js';
import data from './data.js';
import Question from './Question.js';
import Round from './Round.js';
import Categories from './Categories.js';




class Game {
  constructor() {
    this.players = [];
    this.allData = [[], [], [], [], [], [], [], [], [], []];
    this.round = new Round();
  }

  startGame() {
    domUpdates.hideStartScreen();
    let names = domUpdates.grabNames();
    this.players.push(names);
    this.getRandomData();
    this.round.sortRounds(this.allData);
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

  
}


export default Game;

import domUpdates from './domUpdates.js';
import data from './data.js';
import Question from './Question.js';
import Round from './Round.js'


let round = new Round();

class Game {
  constructor() {
    this.players = [];
    this.allData = [[], [], [], [], [], [], [], [], [], []];
  }

  startGame() {
    domUpdates.hideStartScreen();
    let names = domUpdates.grabNames();
    this.players.push(names);
    this.getRandomData();
    round.sortRounds(this.allData);
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
    console.log(this.allData);
  }

  shuffle(a) {
    return a.sort(() => 0.5 - Math.random());
  }

  
}


export default Game;

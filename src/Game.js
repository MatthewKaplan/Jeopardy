import domUpdates from './domUpdates.js';
import data from './data.js';
import Question from './Question.js';

class Game {
  constructor() {
    this.players = [];
    this.allData = [[], [], [], [], [], [], [], [], [], []];
    this.roundOne = [];
    this.roundTwo = [];
    this.finalRound = [];
  }
  startGame() {
    domUpdates.hideStartScreen();
    let names = domUpdates.grabNames();
    this.players.push(names);
    this.getRandomData();
    this.sortRounds();
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

  sortRounds() {
    const roundArr = this.allData

    this.roundOne.categoryIds = roundArr.splice(0, 4);
    this.roundTwo.categoryIds = roundArr.splice(0, 4);
    this.finalRound.categoryIds = roundArr.splice(0, 1);

    console.log(this.roundOne);
    console.log(this.roundTwo);
    console.log(this.finalRound);
    console.log(this.allData);
  }


}


export default Game;

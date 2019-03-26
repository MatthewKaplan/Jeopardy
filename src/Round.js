import Game from './Game.js';
import domUpdates from './domUpdates.js';
import Categories from './Categories.js';
import $ from 'jquery';


class Round {
  constructor() {
    this.roundOne = [];
    this.roundTwo = [];
    this.finalRound = [];
    this.currentQuestion = {};
    this.stage = 1;
    this.roundCounter = 16;
    // this.dDouble = undefined; 
    // this.wager = undefined;
    // this.ddCount = 0;
    this.categories = new Categories();
  }

  sortRounds(dataArr) {
    const roundArr = dataArr
    let roundOneArr = dataArr.splice(0, 4);
    let roundTwoArr = dataArr.splice(0, 4);
    let finalRoundArr = dataArr.splice(0, 1);
    this.roundOne = this.createRounds(roundOneArr, 1, 5, 100).flat();
    this.roundTwo = this.createRounds(roundTwoArr, 1, 5, 100).flat();
    this.finalRound = this.createRounds(finalRoundArr, 1, 2, 400);
  }

  createRounds(round, startNum, endNum, value) {
    const roundArr = round.reduce((acc, arr) => {
      let subArr = []      
      for(let i = startNum; i < endNum; i++) {
        let found = arr.find(el => {
          return el.pointValue === value * i;
        })
        subArr.push(found);
      }
      acc.push(subArr)
      return acc
    }, []);
    return roundArr;
  }

  gameBoardTargeter(boxId, game) {
    if(this.stage === 1) {
      domUpdates.gameBoardListener(boxId, game, this.roundOne);
    } else {
      domUpdates.gameBoardListener(boxId, game, this.roundTwo);
    }
  }

  questionCounter(game) {
    this.roundCounter--;

    if(this.roundCounter === 0) {
      this.stage++;
      this.roundCounter = 16;
      this.switchRound(game);
    }
  }

  switchRound(game) {
    $('.box-title').removeClass('hidden');
    domUpdates.displayCategories(game, this.roundTwo);
  }

}





export default Round;
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
    this.dDouble; 
    this.wager;
    this.ddCount = 0;
    this.categories = new Categories();
  }

  sortRounds(dataArr) {
    let roundOneArr = dataArr.splice(0, 4);
    let roundTwoArr = dataArr.splice(0, 4);
    let finalRoundArr = dataArr.splice(0, 1);
    this.roundOne = this.createRounds(roundOneArr, 1, 5, 100).flat();
    this.roundTwo = this.createRounds(roundTwoArr, 1, 5, 100).flat();
    this.finalRound = this.createRounds(finalRoundArr, 1, 2, 400);
    this.dDouble = this.dailyDoubleIndex();
  }

  createRounds(round, startNum, endNum, value) {
    const roundArr = round.reduce((acc, arr) => {
      let subArr = []      
      for (let i = startNum; i < endNum; i++) {
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
    if (this.stage === 1) {
      domUpdates.gameBoardListener(boxId, game, this.roundOne);
    } else {
      domUpdates.gameBoardListener(boxId, game, this.roundTwo);
    }
  }

  questionCounter(game) {
    this.roundCounter--;

    if (this.roundCounter === 0) {
      this.stage++;
      domUpdates.doubleBoardPoints();
      this.roundCounter = 16;
      this.dDouble = this.dailyDoubleIndex();
      this.switchRound(game);
    }
  }

  switchRound(game) {
    $('.box-title').removeClass('hidden');
    $('.round-num').text(2);
    domUpdates.displayCategories(game, this.roundTwo);
  }

  dailyDoubleIndex() {
    return Math.floor(Math.random() * Math.floor(this.roundCounter)) + 1;
  }

}





export default Round;
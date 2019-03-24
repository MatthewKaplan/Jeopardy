import Game from './Game.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor() {
    this.roundOne = [];
    this.roundTwo = [];
    this.finalRound = [];
    this.stage = 1;
  }

  sortRounds(dataArr) {
    const roundArr = dataArr

    let roundOneArr = dataArr.splice(0, 4);
    let roundTwoArr = dataArr.splice(0, 4);
    let finalRoundArr = dataArr.splice(0, 1);

    this.roundOne = this.createRounds(roundOneArr, 1, 5, 100);
    this.roundTwo = this.createRounds(roundTwoArr, 1, 5, 100);
    this.finalRound = this.createRounds(finalRoundArr, 1, 2, 400);

    console.log(this);
    domUpdates.displayCategories(this);
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
}





export default Round;
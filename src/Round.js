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

    this.roundOne = this.createRounds(roundOneArr);
    this.roundTwo = this.createRounds(roundTwoArr);
    this.finalRound = this.createRounds(finalRoundArr);

    // console.log(this.roundOne);
    domUpdates.displayCategories(this);
  }

  createRounds(round) {
    const roundArr = round.reduce((acc, arr) => {
      let subArr = []
      for(let i = 1; i < 5; i++) {
        let found = arr.find(el => {
          return el.pointValue === 100 * i;
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
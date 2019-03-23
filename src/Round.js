import Game from './Game.js';

class Round {
  constructor() {
    this.roundOne = [];
    this.roundTwo = [];
    this.finalRound = [];
  }

  sortRounds(dataArr) {
    const roundArr = dataArr

    this.roundOne.categoryIds = roundArr.splice(0, 4);
    this.roundTwo.categoryIds = roundArr.splice(0, 4);
    this.finalRound.categoryIds = roundArr.splice(0, 1);

    console.log(this.roundOne);
    console.log(this.roundTwo);
    console.log(this.finalRound);
    console.log(this.allData);
  }
}

export default Round;
import Game from './Game.js';
import domUpdates from './domUpdates.js';
import Categories from './Categories.js';


class Round {
  constructor() {
    this.roundOne = [];
    this.roundTwo = [];
    this.finalRound = [];
    
    this.stage = 1;
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

    domUpdates.displayCategories(this);
    this.gameBoardTargeter(this);
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
    domUpdates.gameBoardListener(boxId, game);
  }
}





export default Round;
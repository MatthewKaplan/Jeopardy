import domUpdates from './domUpdates.js';
import Game from './Game.js';

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score || 0;
  }

  wrong(boxInfo){
    this.score -= boxInfo.pointValue;
    // console.log(this.score);
    console.log(this);
  }

  correct(boxInfo){
    this.score += boxInfo.pointValue;
    // console.log(this.score);
    console.log(this);
  }
}


export default Player
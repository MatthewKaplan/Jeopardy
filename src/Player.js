import domUpdates from './domUpdates.js';
import Game from './Game.js';

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score || 0;
  }

  wrong(boxInfo){
    this.score -= boxInfo.pointValue;
  }

  correct(boxInfo){
    this.score += boxInfo.pointValue;
  }
}


export default Player
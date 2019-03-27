import domUpdates from './domUpdates.js';
import Game from './Game.js';

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score || 0;
    this.playerWager = 0;
  }

  wrong(boxInfo, i) {
    this.score -= boxInfo.pointValue * i;
  }

  correct(boxInfo, i) {
    this.score += boxInfo.pointValue * i;
  }

  ddWrong(boxInfo, i) {
    this.score -= boxInfo.pointValue + (i * 2);
  }

  ddCorrect(boxInfo, i) {
    this.score += boxInfo.pointValue + (i * 2);
  }
}


export default Player
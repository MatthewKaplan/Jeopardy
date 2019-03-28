class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score || 0;
  }

  wrong(boxInfo, i) {
    this.score -= boxInfo.pointValue * i;
  }

  correct(boxInfo, i) {
    this.score += boxInfo.pointValue * i;
  }

  ddWrong(i) {
    this.score -= (i * 2);
  }

  ddCorrect(i) {
    this.score += (i * 2);
  }
}


export default Player
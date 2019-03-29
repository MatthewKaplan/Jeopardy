class Player {
  constructor(name, score, playerImage) {
    this.name = name;
    this.score = score || 0;
    this.playerImage = playerImage;
    this.playerWager = 0;
    this.playerAnswer = "";
  }

  wrong(boxInfo, i) {
    this.score -= boxInfo.pointValue * i;
  }

  correct(boxInfo, i) {
    this.score += boxInfo.pointValue * i;
  }

  ddWrong(boxInfo, i) {
    this.score -= (i * 2);
  }

  ddCorrect(boxInfo, i) {
    this.score += (i * 2);
  }
}


export default Player
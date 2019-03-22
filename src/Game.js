import domUpdates from './domUpdates.js';
import data from './data.js';
import Question from './Question.js';

class Game {
  constructor() {
    this.players = [];
    this.allQuestions = [];
  }
  startGame() {
    domUpdates.hideStartScreen();
    let names = domUpdates.grabNames();
    this.players.push(names);
    this.createQuestions();
  }

  createQuestions() {
    Object.values(data.clues).forEach(clue => {
      this.allQuestions.push(new Question(clue.question, clue.pointValue, clue.answer, clue.potentialAnswers, clue.categoryId));
    });
    console.log(this.allQuestions);
  }
}


export default Game;

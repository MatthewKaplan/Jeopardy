class Question {
  constructor(question, pointValue, answer, potentialAnswer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.potentialAnswer = potentialAnswer; 
    this.categoryId = categoryId;
  }
}

export default Question;
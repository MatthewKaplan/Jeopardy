import $ from 'jquery';

export default {

  hideStartScreen() {
    $('.start-page').hide();
    $('header').removeClass('hidden');
    $('section').removeClass('hidden');
    $('.question-display').addClass('hidden');
    $('.correctAns').addClass('hidden');
    $('.wrongAns').addClass('hidden');
    $('.question-display').addClass('hidden');
    $('.wager-display').addClass('hidden');
  },

  grabNames() {
    let $players = [$('#player1').val(), $('#player2').val(), $('#player3').val()];
    $('.player-1-name').text($players[0]);
    $('.player-2-name').text($players[1]);
    $('.player-3-name').text($players[2]);
    return $players;
  },
  
  displayCategories(game, currRound) {
    game.round.categories.grabCategories();
    const topics = game.round.categories.categoriesArr;
    const topicsArr = [];
    currRound.forEach((cat) => {
      let catId = cat.categoryId - 1;
      topicsArr.push(topics[catId]);
    });
    let uniqueTopics = [...new Set(topicsArr)];
    uniqueTopics.forEach((cat, i) => {
      $(`.cat-${i}`).text(cat);
    })
  },

  gameBoardListener(boxId, game, currRound) {
    let boxInfo = currRound[boxId];
    game.round.currentQuestion = boxInfo;
    let boxValue = boxInfo.pointValue;
    this.showQuestion(boxInfo);
  },

  showQuestion(boxInfo) {
    $('.player-section').addClass('hidden');
    $('.game').addClass('hidden');
    $('.question-display').removeClass('hidden');
    var currentQuestion = ` 
          <h1 class="question-title">${boxInfo.question}</h1>
            <div class="potential-answers">
              <button class="ans-btn" id="answer1">${boxInfo.potentialAnswers[0]}</button>
              <button class="ans-btn" id="answer2">${boxInfo.potentialAnswers[1]}</button>
              <button class="ans-btn" id="answer3">${boxInfo.potentialAnswers[2]}</button>
              <button class="ans-btn" id="answer4">${boxInfo.potentialAnswers[3]}</button>
            </div>`;
    $(".question-display").html(currentQuestion);
  },

  checkAnswer(boxInfo, ans, game) {
    let ansText = ans.innerText.valueOf().toLowerCase();
    let answer = boxInfo.answer.valueOf().toLowerCase();

    $('.question-display').addClass('hidden');
    
    if ((ansText === answer) && (game.round.roundCounter === game.round.dDouble)) {
      game.currentPlayer.ddCorrect(boxInfo, game.round.wager);
      $('.correctAns').removeClass('hidden');
    } else if ((ansText !== answer) && (game.round.roundCounter === game.round.dDouble)) {
      game.currentPlayer.ddWrong(boxInfo, game.round.wager);
      $('.wrongAns').removeClass('hidden');
      game.updatePlayerTurn();
    } else if (ansText === answer) {
      game.round.stage === 1 ? game.currentPlayer.correct(boxInfo, 1) : game.currentPlayer.correct(boxInfo, 2);
      $('.correctAns').removeClass('hidden');
    } else {
      game.round.stage === 1 ? game.currentPlayer.wrong(boxInfo, 1) : game.currentPlayer.wrong(boxInfo, 2);
      $('.wrongAns').removeClass('hidden');
      game.updatePlayerTurn();
    }
  },

  playerTurn(currPlayer) {
    $('.player').removeClass('player-turn');
    $(`.player.${currPlayer.playerIndex}`).addClass('player-turn');
  },

  updateScores(game) {
    game.players.forEach((player, ind) => {
      $(`#player-${ind}-total`).html(`
        <h3 class="player-score" id="player-${ind}-total">Score: ${player.score} </h3>
      `);
    })
  },

  doubleBoardPoints() {
    $('.100').text(200);
    $('.200').text(400);
    $('.300').text(600);
    $('.400').text(800);
  },


  wager(event, game, boxId) {
    $('.player-section').addClass('hidden');
    $('.wager-display').removeClass('hidden');
    $('.game').addClass('hidden');

    var playerWager = `
          <section class="daily-double-prompt">
            <h1 class="question-title daily-double-title">DAILY DOUBLE!</h1>
              <label class="wager" for="wager-input">
                Please enter your wager:
                <input type="number" class="wager-input">
              </label><br>
              <button class="wager-button">Submit Wager</button>
          </section>`;
    $('.wager-display').html(playerWager);
    $('.wager-button').on('click', () => {
      game.round.wager = $('.wager-input').val();
      $('.wager-display').addClass('hidden');
      game.round.gameBoardTargeter(boxId, game);
    })
  },
        
  resetGame() {
    location.reload();
  }
  
}















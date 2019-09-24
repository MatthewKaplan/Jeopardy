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
    $('.final-wager-display').addClass('hidden');
  },

  grabNames() {
    let $players = [$('.player1').val(), $('.player2').val(), $('.player3').val()];
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
        <section class="center-btns">
          <h1 class="question-title">${boxInfo.question}</h1>
            <div class="potential-answers">
              <button class="ans-btn" id="answer1">${boxInfo.potentialAnswers[0]}</button>
              <button class="ans-btn" id="answer2">${boxInfo.potentialAnswers[1]}</button>
              <button class="ans-btn" id="answer3">${boxInfo.potentialAnswers[2]}</button>
              <button class="ans-btn" id="answer4">${boxInfo.potentialAnswers[3]}</button>
            </div>
        </section>`;
    $(".question-display").html(currentQuestion);
  },

  checkAnswer(boxInfo, ans, game) {
    let ansText = ans.innerText.valueOf().toLowerCase();
    let answer = boxInfo.answer.valueOf().toLowerCase();

    $('.question-display').addClass('hidden');
    
    if ((ansText === answer) && (game.round.roundCounter === game.round.dDouble)) {
      game.currentPlayer.ddCorrect(boxInfo, game.round.wager);
      game.getImageTag(game.correctImages);
      $('.correctAns').removeClass('hidden');
    } else if ((ansText !== answer) && (game.round.roundCounter === game.round.dDouble)) {
      game.currentPlayer.ddWrong(boxInfo, game.round.wager);
      game.getImageTag(game.wrongImages);
      $('.wrongAns').removeClass('hidden');
      game.updatePlayerTurn();
    } else if (ansText === answer) {
      game.round.stage === 1 ? game.currentPlayer.correct(boxInfo, 1) : game.currentPlayer.correct(boxInfo, 2);
      game.getImageTag(game.correctImages);
      $('.correctAns').removeClass('hidden');
    } else {
      game.round.stage === 1 ? game.currentPlayer.wrong(boxInfo, 1) : game.currentPlayer.wrong(boxInfo, 2);
      game.getImageTag(game.wrongImages);
      $('.wrongAns').removeClass('hidden');
      game.updatePlayerTurn();
    }
  },

  playerTurn(currPlayer) {
    $('.player').removeClass('player-turn');
    $(`.player.${currPlayer.playerIndex}`).addClass('player-turn');
    if (currPlayer.playerIndex === 0) {
      $(`.player.0`).removeClass('not-player-turn');
      $(`.player.1`).addClass('not-player-turn');
      $(`.player.2`).addClass('not-player-turn');
    } else if (currPlayer.playerIndex === 1) {
      $(`.player.1`).removeClass('not-player-turn');
      $(`.player.0`).addClass('not-player-turn');
      $(`.player.2`).addClass('not-player-turn');
    } else {
      $(`.player.2`).removeClass('not-player-turn');
      $(`.player.0`).addClass('not-player-turn');
      $(`.player.1`).addClass('not-player-turn');
    }
  },

  updateScores(game) {
    game.players.forEach((player, ind) => {
      $(`#player-${ind}-total`).html(`
        <p class="player-score" id="player-${ind}-total">Score: ${player.score} </p>
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
            <section class="center-final">
              <img class="nerd-img" src=${game.currentPlayer.playerImage}><br>
              <h3 class="player-name player-name-dd"> ${game.currentPlayer.name}</h3>
              <h3 class="player-score player-score-dd" id="player-total">Score: ${game.currentPlayer.score} </h3>
            </section>
                <label class="wager" for="wager-input">
                  <input type="number" class="wager-input" placeholder= "Please enter a wager between 5 and your current score">
                </label><br>
                <button class="wager-button" disabled="disabled">Submit Wager</button>
          </section>`;
    $('.wager-display').html(playerWager);

    $('.wager-input').keyup(function () {
      if ($('.wager-input').val() === '' || $('.wager-input').val() < 5 || $('.wager-input').val() > game.currentPlayer.score) {
        $('.wager-button').prop('disabled', true);
      } else {
          $('.wager-button').prop('disabled', false);
          $('.wager-button').on('click', () => {
          game.round.wager = $('.wager-input').val();
          $('.wager-display').addClass('hidden');
          game.round.gameBoardTargeter(boxId, game);
        })
      }
    });
  },

  appendPhoto(img) {
    $('.image').html(img);
  },

  switchRound(game) {
    $('.box-title').removeClass('hidden');
    $('.round-num').text(2);
    this.displayCategories(game, game.round.roundTwo);
  },

  roundThree(boxId, game, round) {
    $('.game').addClass('hidden');
    $('.final-wager-display').removeClass('hidden');
    $('.player-section').removeClass('hidden');

    var finalWager = 
    `<section class="center-final">
      <h1 class="question-title final-jeopardy-title">FINAL JEOPARDY</h1>
        <h4 class="cat-0 final-jeopardy-cat"></h4>
        <button class="final-wager-button">Place your bets!</button>
    </section>
      <div class= "final-wager-input">
        <input type="number" class="player 0 wager" placeholder="${game.players[0].name.toUpperCase()}, Enter Your Wager Here">
        <input type="number" class="player 1 wager" placeholder="${game.players[1].name.toUpperCase()}, Enter Your Wager Here">
        <input type="number" class="player 2 wager" placeholder="${game.players[2].name.toUpperCase()}, Enter Your Wager Here">
      </div>`;
    $('.final-wager-display').html(finalWager);
    $('.final-wager-button').on('click', () => {
      game.players[0].playerWager = $('.player.0.wager').val()
      game.players[1].playerWager = $('.player.1.wager').val()
      game.players[2].playerWager = $('.player.2.wager').val()
      this.roundThreeQuestion(boxId, game, round);
    })   
  },

  roundThreeQuestion(boxId, game, round) {
    var finalQuestion = `
    <section class="center-final">
    <h1 class="question-title final-jeopardy-title">FINAL JEOPARDY</h1>
    <h4 class="cat-0 final-jeopardy-cat">${round.question}</h4>
      <button class="final-submit-button">Submit Answers</button>
    </section>
    <div class="final-wager-input">
      <input type="password" class="player 0 guess" placeholder="${game.players[0].name.toUpperCase()}, Enter Your Answer Here">
      <input type="password" class="player 1 guess" placeholder="${game.players[1].name.toUpperCase()}, Enter Your Answer Here">
      <input type="password" class="player 2 guess" placeholder="${game.players[2].name.toUpperCase()}, Enter Your Answer Here">
    </div>`;
    $('.final-wager-display').html(finalQuestion);
    $('.final-submit-button').on('click', () => {
      game.players[0].playerAnswer = $('.player.0.guess').val();
      game.players[1].playerAnswer = $('.player.1.guess').val();
      game.players[2].playerAnswer = $('.player.2.guess').val();
      this.finalAnswer(boxId, game, round);
    })
  },

  finalAnswer(boxId, game, round) {
    game.players.forEach(player => {
      if (player.playerAnswer.toLowerCase() === round.answer.toLowerCase()) {
        player.score += player.playerWager * 2;
      } else {
        player.score -= player.playerWager * 2;
      }
    })
    round.winner = game.players.reduce((acc, player) => acc.score > player.score ? acc : player )
    var finalWinner = 
    `<section class="center-final">
    <h1 class="question-title final-jeopardy-title">FINAL JEOPARDY</h1>
    <h4 class="cat-0 final-jeopardy-cat">${round.question}</h4>
    <p class="final-jeopardy-cat">THE ANSWER:</p>
    <h4 class="cat-0 final-jeopardy-cat">${round.answer}</h4>
      <button class="final-winner-button final-submit-button">WINNER???</button>
    </section>`;
    $('.final-wager-display').html(finalWinner);
    this.updateScores(game);
    $('.final-winner-button').on('click', () => {
      this.winner(round);
    })
  },

  winner (round) {
    var finalWinner = 
    `<section class="final-question-display">
    <h1 class="question-title final-jeopardy-title">FINAL JEOPARDY</h1>
    <p class="final-jeopardy-cat">THE WINNER IS</p>
    <h1 class="cat-0. winner-name">${round.winner.name.toUpperCase()}</h1>
    </section>`;
    $('.final-wager-display').html(finalWinner);
  },

  resetGame() {
    location.reload();
  }
  
}
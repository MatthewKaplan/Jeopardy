import $ from 'jquery';
import Categories from './Categories.js';
import Game from './Game.js';
import Round from './Round.js';
import Player from './Player.js';

export default {

  hideStartScreen() {
    $('.start-page').hide();
    $('header').removeClass('hidden');
    $('section').removeClass('hidden');
    $('.correctAns').addClass('hidden');
    $('.wrongAns').addClass('hidden');
  },

  grabNames() {
    let $players = [$('#player1').val(), $('#player2').val(), $('#player3').val()];
    $('.player-1-name').text($players[0]);
    $('.player-2-name').text($players[1]);
    $('.player-3-name').text($players[2]);
    return $players;
  },
  
  displayCategories(game) {
    game.round.categories.grabCategories();
    const topics = game.round.categories.categoriesArr;
    const topicsArr = [];
    game.round.roundOne.forEach((cat, i) => {
      let catId = cat.categoryId - 1;
      topicsArr.push(topics[catId]);
    });
    let uniqueTopics = [...new Set(topicsArr)];
    uniqueTopics.forEach((cat,i) => {
      $(`.cat-${i}`).text(cat);
    })
  },

  gameBoardListener(boxId, game) {
    let boxInfo = game.round.roundOne[boxId];
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
    let ansText = ans.innerText.valueOf();
    let answer = boxInfo.answer.valueOf();

    if(ansText === answer){
      game.currentPlayer.correct(boxInfo);
      $('.question-display').addClass('hidden');
      $('.correctAns').removeClass('hidden');
    } else {
      game.currentPlayer.wrong(boxInfo, game);
      $('.question-display').addClass('hidden');
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

  }
}




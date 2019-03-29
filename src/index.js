import Game from './Game.js';

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import domUpdates from './domUpdates.js';

let game = new Game();

$('.play-game-btn').on('click', function(e) {
  e.preventDefault();
  game.startGame(game);
  domUpdates.displayCategories(game, game.round.roundOne);
});

// $(function () {
//   $('.wager').keyup(function () {
//     if ($('.wager').val() === '' || $('.wager').val() < 5 || $('.wager').val() > game.currentPlayer.score) {
//       $('.wager-button').prop('disabled', true);
//     } else {
//       $('.wager-button').prop('disabled', false);
//     }
//   });
// });

$(function () {
  $('.player3, .player2, .player1').keyup(function () {
    if ($('.player1').val() === '' || $('.player2').val() === '' || $('.player3').val() === '') {
      $('.play-game-btn').prop('disabled', true);
    } else {
      $('.play-game-btn').prop('disabled', false);
    }
  });
});


$('.questions-container').on('click', '.box', () => {
  console.log('roundCounter', game.round.roundCounter);
  console.log('dDouble', game.round.dDouble);
  if (game.round.roundCounter === game.round.dDouble) {
    let boxId = event.target.parentElement.id;
    domUpdates.wager(event, game, boxId);
    event.target.classList.add('hidden');
  } else {
    let boxId = event.target.parentElement.id;
    game.round.gameBoardTargeter(boxId, game);
    event.target.classList.add('hidden');
  }
});

$('.question-display').on('click', '.ans-btn', () => {
  let ans = event.target;
  domUpdates.checkAnswer(game.round.currentQuestion, ans, game);
});

$('.correctAns').on('click', '.next-question', () => {
  $('.correctAns').addClass('hidden');
  $('.game').removeClass('hidden');
  $('.player-section').removeClass('hidden');
  domUpdates.updateScores(game);
  game.round.questionCounter(game);
});

$('.wrongAns').on('click', '.next-turn', () => {
  $('.wrongAns').addClass('hidden');
  $('.game').removeClass('hidden');
  $('.player-section').removeClass('hidden');
  domUpdates.updateScores(game);
  game.round.questionCounter(game);
});

$('.reset-btn').on('click', () => {
  game.reset();
});









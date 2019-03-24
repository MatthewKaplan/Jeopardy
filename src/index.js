import Game from './Game.js';
import Categories from './Categories.js';
import Question from './Question.js';
import Round from './Round.js';

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import domUpdates from './domUpdates.js';

let game = new Game();

$('.play-game-btn').on('click', function(e){
  e.preventDefault();
  game.startGame();
  console.log(game);
  domUpdates.displayCategories(game);
});

$('.questions-container').on('click', '.box', () => {
  let boxId = event.target.parentElement.id;
  console.log(boxId);
  console.log(game);
  game.round.gameBoardTargeter(boxId, game);
});


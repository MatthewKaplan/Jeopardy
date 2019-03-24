import $ from 'jquery';
import Categories from './Categories.js';
import Game from './Game.js';
import Round from './Round.js';

export default {

  hideStartScreen() {
    $('.start-page').hide();
    $('header').removeClass('hidden');
    $('section').removeClass('hidden');
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
    game.round.roundOne.forEach((cat, i) => {
      let catId = cat.categoryId - 1;
      console.log(topics[catId]);
      console.log(i);
      $(`.cat-${i}`).text(topics[catId])
    });
  },

  gameBoardListener(boxId, game) {
    let boxInfo = game.round.roundOne[boxId];
    // console.log('boxInfo', boxInfo)
    let boxValue = boxInfo.pointValue;
    // console.log('boxValue', boxValue)
  },

}




import $ from 'jquery';
import Categories from './Categories.js';
import Game from './Game.js';
import Round from './Round.js';

let categories = new Categories();
let round = new Round();

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
  
  displayCategories(round) {
    categories.grabCategories();
    const topics = categories.categoriesArr;
    round.roundOne.forEach((cat, ind) => {
      let catId = cat[0].categoryId - 1;
      $(`.cat-${ind}`).text(topics[catId])
    });
  },
}
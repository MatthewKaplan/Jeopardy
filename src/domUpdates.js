import $ from 'jquery';
import Categories from './Categories.js';
import Round from './Round.js';
import Game from './Game.js';

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
  displayCategories() {
    categories.grabCategories();
    const topics = categories.categoriesArr;
    console.log(topics);
    $(`.cat-${0}`).text(topics[0]);
    $(`.cat-${1}`).text(topics[1]);
    $(`.cat-${2}`).text(topics[2]);
    $(`.cat-${3}`).text(topics[3]);

  },
}
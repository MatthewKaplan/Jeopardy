import $ from 'jquery';
import Categories from './Categories.js';


let categories = new Categories();

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
    console.log(categories.categoriesArr);
  },



}
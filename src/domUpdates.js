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
    console.log(game);
    game.round.categories.grabCategories();
    const topics = categories.categoriesArr;
    game.round.roundOne.forEach((cat, i) => {
      let catId = cat[0].categoryId - 1;
      $(`.cat-${i}`).text(topics[catId])
    });
  },

  gameBoardListener(boxId, game) {
    // console.log(game);
    let boxInfo = game.round.roundOne[boxId];
    // console.log('boxInfo', boxInfo)
    let boxValue = boxInfo.potentialAnswers;
    console.log('boxValue', boxValue)
  },


  showQuestion: function(boxId, game) {
    $('.question-display').prepend(`
      <section class="answer-container">
        <div class="answer-question">
          <h2>${game.round.roundOne.question}</h2>
          <section class="select-answer">
            <button class="ans-btn">${game.round.roundOne[0].answer}</button>
            <button class="ans-btn">${game.round.roundOne[1].answer}</button>
            <button class="ans-btn">${game.round.roundOne[2].answer}</button>
            <button class="ans-btn">${game.round.roundOne[3].answer}</button>
          </section>
        </div>
      </section>
    `);
  },
  // <section class="question-display hidden">
  //   <h1 class="question-title">Question</h1>
  //     <div class="potential-answers">
  //       <button class="answer1 ans-btn">Answer 1</button>
  //       <button class="answer2 ans-btn">Answer 2</button>
  //       <button class="answer3 ans-btn">Answer 3</button>
  //       <button class="answer4 ans-btn">Answer 4</button>
  //     </div>
  // </section>

}




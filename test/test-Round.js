import chai from 'chai';
import Round from '../src/Round.js';
import Game from '../src/Game.js';
import Categories from '../src/Categories.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, ['displayCategories', 'gameBoardListener'], () => true);

describe ('Round', () => {

  let game;
  beforeEach(() => {
    game = new Game();
  })

  it('should be an instance of Round', () => {
    expect(game.round).to.be.an.instanceof(Round);
  })

  it('should have default properties', () => {
    expect(game.round.roundOne).to.deep.equal([]);
    expect(game.round.roundTwo).to.deep.equal([]);
    expect(game.round.finalRound).to.deep.equal([]);
    expect(game.round.currentQuestion).to.deep.equal({});
    expect(game.round.stage).to.equal(1);
    expect(game.round.roundCounter).to.equal(16);
    expect(game.round.categories).to.be.an.instanceOf(Categories);
  })

  it('should sort data into seperate rounds arrays', () => {
    game.getRandomData();
    game.round.sortRounds(game.allData);

    expect(game.round.roundOne.length).to.equal(16);
    expect(game.round.roundTwo.length).to.equal(16);
    expect(game.round.finalRound.length).to.equal(1);
  })

  // it('should change rounds', () => {

  // })





  
})
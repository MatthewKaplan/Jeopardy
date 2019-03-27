import chai from 'chai';
import Round from '../src/Round.js';
import Game from '../src/Game.js';
import Categories from '../src/Categories.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

describe ('Round', () => {

  let game;
  beforeEach(() => {
    game = new Game();
    // round = new Round();
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
  })





  
})
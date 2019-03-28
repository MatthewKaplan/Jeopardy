import chai from 'chai';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
import Round from '../src/Round.js';
import Player from '../src/Player.js';

chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, ['playerTurn', 'appendPhoto'], () => true);

describe('Game', () => {
  let game;
   
  beforeEach(() => {
    game = new Game();
  })

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should have default properties', () => {
    expect(game.players).to.deep.equal([]);
    expect(game.allData).to.deep.equal([[], [], [], [], [], [], [], [], [], []]);
    expect(game.round).to.be.an.instanceOf(Round);
    expect(game.currentPlayer).to.deep.equal({});
    expect(game.playerIndex).to.equal(0);
    expect(game.wrongImages).to.deep.equal([]);
    expect(game.correctImages).to.deep.equal([]);
  })

  it('should have three player objs', () => {
    game.createPlayers(['Matt', 'Tim', 'Joe']);
    expect(game.players.length).to.equal(3);
    game.players.forEach(player => {
      expect(player).to.be.an.instanceOf(Player);
    })
  })

  it('should gather all data on start', () => {
    game.getRandomData();
    game.allData.forEach((cat) => {
      expect(cat.length).to.be.at.least(5);
    })
  })

  it('should start with a current player that is the first player in the players array', () => {
    game.createPlayers(['Matt', 'Tim', 'Joe']);
    game.updatePlayerTurn();
    expect(game.currentPlayer).to.be.an.instanceOf(Player);
  })

  it('should rotate player turn', () => {
    game.createPlayers(['Matt', 'Tim', 'Joe'])
        
    game.updatePlayerTurn();
    expect(game.currentPlayer).to.deep.equal(game.currentPlayer);
    expect(game.playerIndex).to.equal(game.playerIndex);

    game.updatePlayerTurn();
    expect(game.currentPlayer).to.deep.equal(game.currentPlayer);
    expect(game.playerIndex).to.equal(game.playerIndex);

    game.updatePlayerTurn();
    expect(game.currentPlayer).to.deep.equal(game.currentPlayer);
    expect(game.playerIndex).to.equal(game.playerIndex);
  })

  it('should retrieve images from data and store them as arrays', () => {
    game.grabImages();
    expect(game.wrongImages).to.be.an('Array');
    expect(game.correctImages).to.be.an('Array');
    expect(game.wrongImages).to.have.lengthOf(6);
    expect(game.correctImages).to.have.lengthOf(7);
  })

  it('should include a shuffle method to shuffle arrays', () => {
    let a = [ 4, 6, 2, 6, 4, 2, 5, 88, 43, 234, 643, 234, 645];
    expect(a[0]).to.not.equal(game.shuffle(a)[0]);
  })

})









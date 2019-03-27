import chai from 'chai';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import $ from 'jquery';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, ['playerTurn'], () => true);

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



})
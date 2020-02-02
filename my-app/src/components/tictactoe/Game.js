import React, { Component } from 'react'
import Board from './Board'

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
        numberOfMoves: 0,
        numberOfGames: 0,
        opponentType: null,
    }
}

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>  
    );
  }
}

export default Game

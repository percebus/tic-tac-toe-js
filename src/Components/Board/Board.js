import _ from 'lodash'
import React from 'react';
import Square from '../Square/Square';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isX: false,
      squares: Array(9).fill(null)
    };
  }

  onClick(i) {
    const state = this.state;
    if (state.squares[i]) {
      alert('Space taken!, choose another one')
      return
    }

    const squares = _.clone(state.squares);
    squares[i] = state.isX ? '0' : 'X';
    this.setState({
      isX: !state.isX,
      squares: squares
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.onClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board

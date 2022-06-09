import React from 'react';
import Square from '../Square/Square';


class Board extends React.Component {
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>

        <div className="board-row">
          {Square.render_i(0)}
          {Square.render_i(1)}
          {Square.render_i(2)}
        </div>
        <div className="board-row">
          {Square.render_i(3)}
          {Square.render_i(4)}
          {Square.render_i(5)}
        </div>
        <div className="board-row">
          {Square.render_i(6)}
          {Square.render_i(7)}
          {Square.render_i(8)}
        </div>
      </div>
    );
  }
}

export default Board

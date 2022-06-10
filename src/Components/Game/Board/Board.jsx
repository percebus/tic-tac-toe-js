import React from 'react'

import _ from 'lodash'
// import {Clone} from 'react-lodash' // TODO? or XXX?

import Square from './Square/Square'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isX: false,
      squares: Array(9).fill(null)
    }
  }

  whoIsNext () {
    return this.state.isX ? 'O' : 'X'
  }

  onClick (i) {
    const squares = _.clone(this.state.squares)
    if (squares[i]) {
      alert('Space taken!, choose another one')
      return
    }

    squares[i] = this.whoIsNext()
    this.setState({
      isX: !this.state.isX,
      squares
    })
  }

  renderSquare (i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.onClick(i)}
      />
    )
  }

  render () {
    return (
      <div>
        <div className='status'>
          Next player: {this.whoIsNext()}
        </div>

        <div>
          <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className='board-row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    )
  }
}

export default Board

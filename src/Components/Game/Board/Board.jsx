import React from 'react'

import _ from 'lodash'
import { Map } from 'react-lodash'

import Square from './Square/Square'

class Board extends React.Component {
  constructor (props) {
    super(props)

    const axis = 3
    this.state = {
      isX: false,
      axis,
      squares: Array(axis ** 2).fill(null)
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
    const rows = _.chain()
      .range(this.state.squares.length)
      .chunk(this.state.axis)
      .value()

    console.debug('rows', rows)

    return (
      <div>
        <div className='status'>
          Next player: {this.whoIsNext()}
        </div>

        <div>
          <Map
            collection={rows}
            iteratee={columns =>
              <div className='board-row'>
                <Map collection={columns} iteratee={idx => this.renderSquare(idx)} />
              </div>}
          />
        </div>
      </div>
    )
  }
}

export default Board

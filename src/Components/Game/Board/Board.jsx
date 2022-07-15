import React from 'react'
import _ from 'lodash'
import { Map } from 'react-lodash'
import Square from './square/Square'
import './board.css'

let storage = null
try { // TODO encapsulate in another module
  /* global chrome */
  storage = _.get(chrome, 'storage.sync', null)
} catch (oError) {
  console.warn(oError)
}

class Board extends React.Component {
  getAxis () {
    let _axis = 3

    if (!storage) { return _axis }
    storage.get('axis', ({ axis }) => {
      _axis = axis
    })

    return _axis
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

  constructor (props) {
    super(props)

    const axis = this.getAxis()
    this.state = {
      isX: false,
      axis,
      squares: Array(axis ** 2).fill(null)
    }
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
} export default Board

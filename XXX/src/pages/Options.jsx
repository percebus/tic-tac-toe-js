import _ from 'lodash'
import React from 'react'

let storage = null
try { // TODO encapsulate in another module
  /* global chrome */
  storage = _.get(chrome, 'storage.sync', null)
} catch (oError) {
  console.warn(oError)
}

class Options extends React.Component {
  handleAxis (event) {
    this.setState({ axis: event.target.value })
  }

  handleSubmit (event) {
    console.log('')
    if (!storage) {
      console.warn('chrome.storage.sync not found!', storage)
      return
    }

    const axis = this.state.axis
    storage.set({ axis })
  }

  getAxis () {
    let _axis = 3
    if (!storage) { return _axis }
    storage.get('axis', ({ axis }) => {
      _axis = axis
    })

    return _axis
  }

  constructor (props) {
    super(props)

    this.state = {
      axis: this.getAxis()
    }

    this.handleAxis = this.handleAxis.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Storage</legend>
          <label for='axis'>
            Axis:
            <input id='axis' name='axis' type='number' value={this.state.axis} onChange={this.handleAxis} />
          </label>
          <button id='submit' type='submit'>Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default Options

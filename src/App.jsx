import React from 'react'
import PopUp from './pages/PopUp'
import { Router } from 'react-chrome-extension-router'

function App () {
  return (
    <Router>
      <PopUp />
    </Router>
  )
}

export default App

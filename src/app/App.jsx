import React from 'react'
import Intro from '../views/intro/Intro'
import { Router } from 'react-chrome-extension-router'

function App () {
  return (
    <Router>
      <Intro />
    </Router>
  )
}

export default App

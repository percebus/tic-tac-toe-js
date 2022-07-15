import React from 'react'
import Intro from '../pages/intro/Intro'
import { Router } from 'react-chrome-extension-router'

function App () {
  return (
    <Router>
      <Intro />
    </Router>
  )
}

export default App

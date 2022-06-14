import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PopUp from './pages/PopUp'
import Options from './pages/Options'

function App () {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<PopUp />} />
        <Route path='/popup' element={<PopUp />} />
        <Route path='/options' element={<Options />} />
      </Routes>
    </Router>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import About from './pages/About'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
}

export default App

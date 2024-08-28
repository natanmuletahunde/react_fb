import React from 'react'
import About from './pages/About'
import Blog from './pages/Blog'
import Class from './pages/Class'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Single from './pages/Single'
import Team from './pages/Team'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/class' element={<Class />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/single' element={<Single />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

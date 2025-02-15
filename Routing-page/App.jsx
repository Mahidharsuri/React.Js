import React from 'react'
import Navbar from './navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './assets/Home'
import Dashboard from './assets/Dashboard'
import About from './assets/About'

const App = () => {
  return (
    <div>
     <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about"  element={<About/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

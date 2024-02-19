import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='sign-up' element={<Signup/>}></Route>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path='projects' element={<Projects/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='sign-in' element={<Signin/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

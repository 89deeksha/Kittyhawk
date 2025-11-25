import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Todo from './Pages/Todo'
import About from './Pages/About'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/about' element={<About/>}/>


       
      
      </Routes>
    </div>
  )
}

export default App
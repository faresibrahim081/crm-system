
import React from 'react'
import { Route, Routes } from 'react-router'
import Sign from './Components/Sign'
import User from './Components/User'

function App() {
  return (
    <div>
      <Routes>
      <Route path='/'  element={<Sign/>}/>
      <Route path='/user' element={<User/>}/>  
      </Routes> 
    </div>
  )
}

export default App
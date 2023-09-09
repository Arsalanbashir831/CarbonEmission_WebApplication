import React from 'react'
import profilepic from "./assets/profile.png"
import Dashboard from './pages/Dashboard'
import Login from './pages/login'
import { Route, Routes } from 'react-router'
import Register from './pages/Register'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/dashboard/*' element={<Dashboard profile={profilepic}></Dashboard>}></Route>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/Register' element={<Register></Register>}></Route>
    </Routes>
    </>
  )
}

export default App
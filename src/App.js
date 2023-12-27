import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import RootLayOut from './components/RootLayOut'
import Single from './pages/Single'
import Write from './pages/Write'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePage />} />
          <Route path='/posts/:_id' element={<Single />} />
          <Route path='/write' element={<Write />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App


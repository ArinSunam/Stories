import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import RootLayOut from './components/RootLayOut'
import Single from './pages/Single'
import Write from './pages/Write'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditPost from './pages/UpdatePost/EditPost'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePage />} />
          <Route path='/posts/:_id' element={<Single />} />
          <Route path='/posts/update/:id' element={<EditPost />} />
          <Route path='/write' element={<Write />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} />
    </>
  )
}

export default App


import React from 'react'
import TopBar from './topBar'
import { Outlet } from 'react-router'

const RootLayOut = () => {
  return (
    <div>
      <TopBar />
      <Outlet />

    </div>
  )
}

export default RootLayOut

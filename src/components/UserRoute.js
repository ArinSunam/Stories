import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';

const UserRoute = () => {

  const { user } = useSelector((store) => store.userInfo);

  return user === null ? <Outlet /> : <Navigate to='/' replace={true} />

}

export default UserRoute

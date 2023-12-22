import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'
import { Post } from '../components/Post'







const HomePage = () => {
  return (
    <>

      <Header />


      <div className='flex '>
        <Post />


        <Sidebar />
      </div>

    </>


  );
}

export default HomePage

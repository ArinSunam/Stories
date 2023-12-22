import React from 'react'
import Sidebar from '../components/Sidebar'
import { Button } from '@material-tailwind/react'

const Settings = () => {
  return (
    <div className='flex'>

      <div className='w-9/12 p-5'>
        <div className='flex items-center justify-between'>
          <span className='text-[30px] mb-[20px] text-red-300 '>Update Your Account</span>
          <span className='text-[12px] text-red-800 cursor-pointer'>Delete Account</span>
        </div>


        <form className='flex flex-col '>
          <label className='text-[20px] mt-[20px]' >Profile Picture</label>
          <div className='flex items-center my-[10px]  '>
            <img className='w-[70px] h-[70px] object-cover rounded-[20px]' src="https://plus.unsplash.com/premium_photo-1676741354457-5f1739f8837e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <label htmlFor="fileInput">
              <i className='fa-regular fa-circle-user w-[15px] h-[15px] rounded-[50%] bg-red-300 text-white  flex items-center justify-center ml-2 cursor-pointer'></i>
            </label >
            <input className='hidden' type="file" id='fileInput' />
          </div>

          <label className='text-[20px] mt-[20px]' >Username</label>
          <input type="text" placeholder='usr'
            className='my-[10px] h-[30px] border-b-[1px] border-gray-400' />

          <label className='text-[20px] mt-[20px]'> Email</label>
          <input type="email" placeholder='meow@gmail.com'
            className='my-[10px] h-[30px] border-b-[1px] border-gray-400' />

          <label className='text-[20px] mt-[20px]'>Password</label>
          <input type="password"
            className='my-[10px] h-[30px] border-b-[1px] border-gray-400' />
          <Button color='teal' size='lg' className='w-[120px] relative left-[400px] top-[15px]'>Update</Button>

        </form>
      </div>



      <Sidebar />




    </div>
  )
}

export default Settings

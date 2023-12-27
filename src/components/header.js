import React from 'react'

const Header = () => {
  return (
    <div className='mt-[60px]  '>
      <div className=' flex flex-col items-center font-Lora '>
        <span className='absolute top-[17%] text-[20px] text-gray-400 font'>Stories & Meow</span>
        <span className='absolute top-[17%] text-[100px] text-black '>Blog</span>

      </div>

      <img className='w-full h-[450px] mt-[80px] object-cover'
        src="https://images.unsplash.com/photo-1599488879763-bc34d1796448?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

    </div>
  )
}

export default Header

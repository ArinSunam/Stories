import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-3/12 m-[20px] pb-[30px] bg-slate-50  rounded-lg flex flex-col items-center'>
      <div className='flex flex-col items-center' >
        <span className=' m-[10px] p-[5px] w-[80%] border-y-2 border-solid border-slate-150 
        font-semibold col text-[12px] text-center
        text-slate-600 leading-5 '>ABOUT ME</span>
        <img className='mt-4' src="https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p className='p-[30px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, soluta!</p>





      </div>

      <div className=' flex flex-col items-center'>
        <span className='m-[10px] p-[5px] w-[80%] border-y-2 border-solid border-slate-150 text-[12px] text-center text-slate-800 leading-5 font-semibold'>CATEGORIES</span>
        <ul className='mb-[30px] text-center '>
          <li className='inline-block w-1/2 mt-[15px] cursor-pointer'>Life</li>
          <li className='inline-block w-1/2  mt-[15px] cursor-pointer'>Music</li>
          <li className='inline-block w-1/2  mt-[15px] cursor-pointer'>Style</li>
          <li className='inline-block w-1/2  mt-[15px] cursor-pointer'>Sport</li>
          <li className='inline-block w-1/2  mt-[15px] cursor-pointer'>Tech</li>
          <li className='inline-block  mt-[15px] cursor-pointer'>Cinema</li>
        </ul>
      </div>

      <div className=' flex flex-col items-center'>
        <span className='m-[10px] p-[5px] w-[80%] border-y-2 border-solid border-slate-150 text-[12px] text-center
        text-slate-800 leading-5 font-semibold'>FOLLOW US</span>
        <div className='mt-[15px] flex items-center justify-center'>
          <i className='fa-brands fa-square-facebook
          text-base ml-[10px] cursor-pointer
       '></i>
          <i className='fa-brands fa-instagram
          text-base ml-[10px] cursor-pointer
        '></i>
          <i className='fa-brands fa-whatsapp
          text-base ml-[10px] cursor-pointer
        '></i>
          <i className='fa-brands fa-viber
          text-base ml-[10px] cursor-pointer
       '></i>

        </div>
      </div>



    </div>
  )
}

export default Sidebar

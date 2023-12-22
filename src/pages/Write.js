import React from 'react'
import { Button } from '@material-tailwind/react'


const Write = () => {
  return (
    <div className='pt-[50px] '>
      <img className='ml-[150px] w-[70vw] h-[250px] object-cover rounded-md' src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <form >
        <div className='ml-[150px] flex items-center'>
          <label htmlFor="fileInput">
            <i className='fa-solid fa-plus first-letter:w-[25px]h-[25px] rounded-[50%] border-[1px] border-solid flex items-center justify-center text-[20px] text-gray-600
            
            '></i>
          </label>
          <input className='hidden' type="file" id="fileInput"
          />

          <input className=
            ' border-none text-[30px] p-[20px] w-[70vw] focus:outline-none' type="text" placeholder='Title' autoFocus={true} />
        </div>
        <div className='ml-[150px] border-none'>
          <textarea placeholder='Tell your story'
            type="text" className='text-[20px] 
            p-[20px] h-[100vh] w-[70vw] focus:outline-none'></textarea>
        </div>
        <Button color='teal'
          className='absolute bottom-[215px]
          right-[50px]'> Publish </Button>

      </form>

    </div>
  )
}

export default Write

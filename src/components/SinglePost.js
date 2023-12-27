import React from 'react'
import { useGetPostDetailQuery } from '../features/BlogApi'
import { useParams } from 'react-router'

// PURAI ERROR


const SinglePost = () => {

  const { _id } = useParams();
  const { isLoading, isError, error, data } = useGetPostDetailQuery(_id);





  return (

    <>
      {data && <div className=' w-9/12'>
        <div className='p-[30px] pr-0'>
          <img className='w-full h-[300px] rounded-[5px] object-cover' src="https://images.unsplash.com/photo-1655183806422-e40565e79e5c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBndWl0YXIlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D" alt="" />

          <h1 className='text-center text-[28px]'>{data.title}
            <div className='float-right text-[16px] cursor-pointer'>
              <i className='fa-regular fa-pen-to-square
            text-blue-400'></i>
              <i className='fa-solid fa-trash
            ml-[10px] text-red-600'></i>
            </div>
          </h1>
          <div className='mb-[20px] flex justify-between text-base text-orange-500 '>
            <span>Author: <b>{data.username}</b> </span>
            <span>{data.updatedAt}</span>
          </div>

          <p className='text-gray-700 text-lg leading-[25px] first-letter:ml-[20px] first-letter:text-[30px] first-letter:font-semibold'> {data.desc}</p>
        </div>


      </div>}
    </>



  )
}

export default SinglePost

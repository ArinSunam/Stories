import React from 'react'
import { useGetPostsQuery } from '../features/BlogApi';
import { useNavigate } from 'react-router';


export const Post = () => {
  const { data, isLoading } = useGetPostsQuery();
  const nav = useNavigate();


  console.log("data", data);




  return (

    <div className='w-9/12 '>

      <div className='grid grid-cols-2 md:grid-cols-1'>



        {data && data.map(detail => (
          <div className='w-[385px] mt-[35px] mr-[25px] mb-[40px] ml-[25px] '>

            <img className='w-full h-[280px] object-cover rounded-[7px] ' src="https://images.unsplash.com/photo-1655183806422-e40565e79e5c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBndWl0YXIlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D" alt="" />

            <div className='flex flex-col items-center'>
              <div className='text-[11px] text-amber-400 leading-5  cursor-pointer mt-[15px]  ' >

                {/* ERROR */}

                {detail.categories.map(category =>

                (<span className='mr-[10px]'>{category}</span>
                )
                )}

              </div>
              <span onClick={() => nav(`/posts/${detail._id}`)} className='text-[24px] font-bold mt-[15px] cursor-pointer'>{data && detail.title} </span>
              <hr />
              <span className='italic text-[13px] text-gray-400 mt-15px'>1 hour ago</span>


              <p className='text-[14px] text-gray-700 leading-6 mt-[10px] text-ellipsis line-clamp-4  '>

                {data && detail.desc}

              </p></div>
          </div>
        ))}


      </div>


    </div>

  )
};
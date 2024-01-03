import React, { useState } from 'react'
import { useDeletePostMutation, useGetPostDetailQuery, useUpdatePostMutation } from '../features/BlogApi'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Tooltip, IconButton, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react'








const SinglePost = () => {

  const { _id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();

  //Post detail by id hook
  const { isLoading, isError, error, data } = useGetPostDetailQuery(_id);



  //post delete hook
  const { mutate: deletePost, isLoading: load } = useDeletePostMutation();
  const [pId, setPId] = useState(0);
  const { user } = useSelector((store) => store.userInfo);

  if (isLoading) {

  }


  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const remove = async (_id) => {

    handleOpen();

    try {
      const result = await deletePost({
        username: user.username
      }).unwrap();


      toast.success('successfully deleted');
      nav(`/`);
    } catch (err) {
      toast.error(err.data);
    }

    console.log('remove', _id);
  }




  return (

    <>
      {data && <div className='mx-[130px] lg:mx-[40px] xl:ml-[0.5px] xl:mr-0.5'>
        <div className='p-[30px] pr-0 '>
          <h1 className='text-center text-[28px] relative ml-[20px]'>{data.title} </h1>
          <img className='w-9/12 lg:w-full h-[350px] rounded-[5px] object-cover my-[40px] ml-[150px] lg:m-0 xl:my-[20px]' src="https://images.unsplash.com/photo-1655183806422-e40565e79e5c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBndWl0YXIlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D" alt="" />


          <div className='flex justify-between items-baseline'>


            <span className='mb-[20px]  text-base   '>Author: <b>{data.username}</b> </span>

            <div className='float-right  cursor-pointer '>
              <i className='fa-regular fa-pen-to-square
            text-blue-400 text-[14px]'></i>

              <Tooltip content="Remove Product">
                <IconButton onClick={() => {
                  setPId(_id);
                  handleOpen();
                }} variant="text" color="red">
                  <i className='fa-solid fa-trash
            ml-[10px]
            '></i>
                </IconButton>
              </Tooltip>
            </div>





          </div>






          <p className='text-gray-700 text-lg leading-[25px] first-letter:ml-[20px] first-letter:text-[30px] first-letter:font-semibold'> {data.desc}</p>
        </div>


      </div>
      }

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody divider>
          Once you delete post you can't undo it!!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => remove(pId)}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>



  )
}

export default SinglePost

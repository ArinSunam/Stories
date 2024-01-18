import React, { useState } from 'react'
import { Button } from '@material-tailwind/react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useUpdatePostMutation } from '../../features/BlogApi';
import { baseUrl } from '../../features/constant';



const EditForm = ({ post }) => {

  const [updatePost, { isLoading }] = useUpdatePostMutation();


  console.log('update', updatePost);

  const nav = useNavigate();



  const { user } = useSelector((store) => store.userInfo);

  const valSchema = Yup.object().shape({
    title: Yup.string().min(3, 'too short').max(30, 'max character').required(),
    desc: Yup.string().min(30, 'too short').max(3500, 'max character').required(),
    // photo: Yup.mixed().test('fileType', 'Invalid file type', (value) => value && ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type)).test('fileSize', 'File too large', (value) =>
    //   (value && value.size <= 10 * 1024 * 1024)
    // )
  });

  const formik = useFormik({
    initialValues: {
      title: post.title,
      desc: post.desc,
      photo: null,
      preview: `${baseUrl}${post.photo}`,
    },

    onSubmit: async (val) => {
      console.log('onsubmit')
      let formData = new FormData();
      formData.append('title', val.title);
      formData.append('desc', val.desc);
      formData.append('username', user.username);
      console.log('body.user', user.username)


      console.log('form data', formData)

      try {

        const postId = String(post._id);

        if (formik.values.photo === null) {
          const response = await updatePost({
            body: formData,
            id: postId
          }).unwrap();
          console.log('response', response);
          toast.success("Update Successful");
          nav(-1);
        } else {
          formData.append('photo', val.photo);
          formData.append('prevImage', post.photo);

          const response = await updatePost({
            body: formData,
            id: postId
          }).unwrap();
          console.log('response', response);
          toast.success("Update Successful");
          nav(-1);
        }



      } catch (error) {
        console.log('Error updating data', error);

      }

    },
    validationSchema: valSchema



  })



  return (
    <div className='pt-[50px] '>
      <img className='ml-[150px] w-[70vw] h-[250px] object-cover rounded-md' src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <form onSubmit={formik.handleSubmit} >
        <div className='ml-[150px] flex items-center'>
          <label htmlFor="fileInput">
            <i className='fa-solid fa-plus first-letter:w-[25px]h-[25px] rounded-[50%] border-[1px] border-solid flex items-center justify-center text-[20px] text-gray-600
            cursor-pointer
            
            '></i>
          </label>
          <input
            id='fileInput'
            className='hidden'
            type="file"
            name='photo'
            onChange={(e) => {
              const file = e.currentTarget.files[0];
              formik.setFieldValue('photo', file);
              formik.setFieldValue('preview', URL.createObjectURL(file));
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.addEventListener('load', () => {
                formik.setFieldValue('preview', reader.result);
              })
            }}
          />
          {formik.errors.photo && formik.touched.photo ? <h1 className='mt-2 text-red-600'>{formik.errors.photo}</h1> : null}
          {formik.values.preview && <img src={formik.values.preview} alt='Preview' className='w-20 h-20 ml-2' />}


          <input className=
            ' border-none text-[30px] p-[20px] w-[70vw] focus:outline-none' type="text" placeholder='Title' autoFocus={true}
            id='title'
            value={formik.values.title}
            onChange={formik.handleChange} />
          {formik.errors.title && formik.touched.title ? <h1 className='mt-2 text-red-600'>{formik.errors.title}</h1> : null}

        </div>
        <div className='ml-[150px] border-none'>
          <textarea placeholder='Tell your story'
            type="text" className='text-[20px] 
            p-[20px] h-[100vh] w-[70vw] focus:outline-none'
            id='desc'
            value={formik.values.desc}
            onChange={formik.handleChange} />
        </div>
        <Button
          type='Submit' color='teal'
          className='absolute bottom-[215px]
          right-[50px]'> Publish </Button>

      </form>

    </div>
  )
}

export default EditForm

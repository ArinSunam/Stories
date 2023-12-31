import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography
} from '@material-tailwind/react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../features/authApi';
import * as Yup from 'yup';
import { toast } from 'react-toastify'
import { useFormik } from 'formik';
import { setUserToLocal } from '../features/userSlice';

const Login = () => {

  const nav = useNavigate();
  const dispatch = useDispatch();
  const [Login, { isLoading }] = useLoginMutation();

  const loginSchema = Yup.object().shape({
    username: Yup.string().min(5).max(20).required('Required'),
    password: Yup.string().min(5).max(20).required('Required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (val) => {
      try {
        const response = await Login(val).unwrap();
        console.log("response", response)
        dispatch(setUserToLocal(response));
        toast.success('successfully login');
        nav(-1);
      } catch (err) {
        console.error("Fetch error:", err);
        toast.error(err.data);
      }
    },
    validationSchema: loginSchema
  })



  return (

    <Card color='transparent' shadow={false} className='mx-auto max-w-xl mt-12 space-y-9'>
      <Typography variant='h4' color='blue-gray'>
        Login Form
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <div className='mb-4 flex flex-col gap-6'>
          <Input name='username'
            onChange={formik.handleChange}
            value={formik.values.email}
            size="lg" label="Username" />

          {formik.errors.username && formik.touched.username && <h1 className='text-pink-700'>{formik.errors.username}</h1>}
          <Input name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            type='password'
            size="lg" label="Password" />

          {formik.errors.password && formik.touched.password && <h1 className='text-pink-700'>{formik.errors.password}</h1>}
        </div>

        {isLoading ? <Button type='submit'
          className='mt-6' fullWidth>
          <div className='h-7 w-7 border-3 border-t-blue-gray-900 rounded-full animate-spin mx-auto'></div>
        </Button> :

          <Button type='submit'
            className='mt-6' fullWidth>
            Submit
          </Button>
        }

        <Typography color='gray' className='mt-4 text-center font-normal'>
          Don't have an account? {""}
          <button type='button' onClick={() => nav('/Register')}> <h1 className='font-medium text-blue-500 transition-colors hover:text-blue-700'>Sign Up</h1></button>
        </Typography>
      </form>
    </Card>


  )
}

export default Login

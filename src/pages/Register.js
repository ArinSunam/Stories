import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRegisterMutation } from '../features/authApi';
import { toast } from 'react-toastify';



const Register = () => {

  const [register, { isLoading }] = useRegisterMutation();


  const registerSchema = Yup.object().shape({
    username: Yup.string().min(5).max(20).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5).max(20).required('Required')

  });

  const nav = useNavigate();


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''

    },
    onSubmit: async (val) => {

      try {
        const response = await register(val).unwrap();
        toast.success('successfully registered');
        nav(-1);
      } catch (err) {
        toast.error(err.data.message);
      }


    },
    validationSchema: registerSchema
  });


  return (
    <Card color="transparent" shadow={false} className='mx-auto max-w-xl mt-12 space-y-9'  >
      <Typography variant="h4" color="blue-gray">
        SignUp Form
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">

          <Input
            name='username'
            onChange={formik.handleChange}
            value={formik.values.username}
            size="lg" label="UserName" />

          {formik.errors.username && formik.touched.username && <h1 className='text-pink-700'>{formik.errors.username}</h1>}


          <Input
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            size="lg" label="Email" />

          {formik.errors.email && formik.touched.email && <h1 className='text-pink-700'>{formik.errors.email}</h1>}


          <Input
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password" size="lg" label="Password" />
          {formik.errors.password && formik.touched.password && <h1 className='text-pink-700'>{formik.errors.password}</h1>}
        </div>

        {isLoading ? <Button type='submit' className="mt-6" fullWidth>
          <div className='h-7 w-7 border-2 border-t-blue-gray-900 rounded-full animate-spin mx-auto '></div>
        </Button> :

          <Button type='submit' className="mt-6" fullWidth>
            Submit
          </Button>
        }



        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account ?{" "}
          <button type='button' onClick={() => nav(-1)}>  <h1

            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Login
          </h1>
          </button>
        </Typography>
      </form>
    </Card>
  )
}

export default Register
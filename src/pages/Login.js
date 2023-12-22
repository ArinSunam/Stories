import React from 'react'
import {
  Input,
  Button
} from '@material-tailwind/react'

const Login = () => {
  return (
    <div className='text-center' >
      <form>
        <label >Email </label>
        <Input size='sm' type='text' placeholder='Enter  your email...' className='my-[10px]' />

        <label className='my-[10px]'>Password</label>
        <Input type='password' placeholder='Password' />
        <Button>Login</Button>
      </form>
      <Button>Register</Button>

    </div>
  )
}

export default Login

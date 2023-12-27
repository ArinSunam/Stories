import React from 'react'
import {
  Input,
  Button
} from '@material-tailwind/react'

const Login = () => {
  return (
    <div className='text-center ' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
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

import React from 'react'

const Register = () => {
  return (
    <div>
      <span> Register</span>
      <form action="">
        <label htmlFor="">Username</label>
        <input type="text" placeholder='Enter your username...' />
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Enter your email....' />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Enter your password....' />

        <Button> Register</Button>
      </form>

      <button> Login</button>
    </div>
  )
}

export default Register

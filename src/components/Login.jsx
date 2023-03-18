import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Instagram</h1>
      <input type={'email'} placeholder='Email'></input>
      <br></br>
      <input type={'password'} placeholder='password'></input>
      <br></br>
      <button>login</button>
      <Typography variant='h2'>welcome to react</Typography>
      <TextField label="email" variant="standard"/>
      <br></br>
      <TextField type={'password'} label="password" variant="standard"/>
      <br />
      <Button variant="outlined" color='primary'>login</Button>

      
    </div>
  )
}

export default Login

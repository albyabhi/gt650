import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <TextField id="standard-basic" label="first name" variant="standard" />
      <br/>
      <TextField id="standard-basic" label="last name" variant="standard" />
      <br />
      <TextField id="standard-basic" label="email" variant="standard" />
      <br/>
      <TextField id="standard-basic" label="password" variant="standard" />
      <br/>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default Signup

import { AppBar, Box, Button , Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Homee = () => {
  

  return (
    <div>
      <Box >
      <AppBar>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            <Link to="/" style={{color:'white', textDecoration:'none'}}>
            Student
          </Link></Typography>
          <Button color="inherit">
            <Link to="/read" style={{color:'white', textDecoration:'none'}}>view</Link></Button>
            <Button color="inherit"> <Link to="/addstudents" style={{color:'white', textDecoration:'none'}}>add</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Homee

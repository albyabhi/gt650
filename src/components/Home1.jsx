import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Home1 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            <Link to="/" style={{color:'white', textDecoration:'none'}}>
            Welcome to react
          </Link></Typography>
          <Button color="inherit">
            <Link to="/login" style={{color:'white', textDecoration:'none'}}>login</Link></Button>
            <Button color="inherit"> <Link to="/signup" style={{color:'white', textDecoration:'none'}}>signup</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Home1

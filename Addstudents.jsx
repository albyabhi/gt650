import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = () => {
    var[addstudent,setaddstudent]=useState({
   
        id:"",
        name:"",
        grade:''
    })
    const handlechange=(e)=>{
        const{name,value}=e.target 
        setaddstudent({...addstudent,[name]:value})
        console.log(addstudent)
    }
    const savedata=()=>{
        console.log("Button clicked")
    
    axios.post(" http://localhost:3005/students",addstudent)    
    .then(Response=>{
        alert=("Success")
    })
    .catch(error=>{
        alert("failed")
    })
   }
    
    
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
      <Typography variant='h4'>Add students</Typography>
      <form>
      <TextField id="outlined-basic" label="id" variant="outlined" name='id'value={addstudent.id} onChange={handlechange}/>
      <br />
      <br />
      <TextField id="outlined-basic" label="name" variant="outlined" name='name'value={addstudent.name} onChange={handlechange} />
      <br />
      <br />
      <TextField id="outlined-basic" label="Grade" variant="outlined" name='grade'value={addstudent.grade} onChange={handlechange}/>
      <br />
      <br />
      <Button variant="contained" color='success' onClick={savedata}>Submit</Button>
      </form>
    </div>
  )
}

export default Addstudents

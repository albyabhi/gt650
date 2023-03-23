import { Button, TableContainer, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = (props) => {
    
    var[addstudent,setaddstudent]=useState(props.data)
    
    const handlechange=(e)=>{
        const{name,value}=e.target 
        setaddstudent({...addstudent,[name]:value})
        console.log(addstudent)
    }
    const savedata=()=>{
      

        if(props.method==="post"){
            console.log("POST Button clicked")
    axios.post(" http://localhost:3005/students",addstudent)    
    .then(response=>{
        alert=("Success")
    })
    .catch(error=>{
        alert("failed")
    })

}else if(props.method=="put"){
    axios.put("http://localhost:3005/students/"+addstudent.id,addstudent)
    .then((response)=>{
        console.log("put data",response.data);
    alert("success")
        window.location.reload(false);
    })
    .catch((err)=>{
        console.log(err)
    })
   }
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

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addstudents from './Addstudents'

const Read = () => {
  var[update,setupdate]=useState(false)
  var[singleValue,setSinglevalue]=useState([])
    var[students,setstudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(response=>{
            console.log(response.data)
            setstudents(students=response.data)
        })
        .catch(err=>console.log(err))
    },[])
    const deletestudents =(id)=>{
      console.log("delete clicked");
      axios.delete("http://localhost:3005/students/"+id)
      .then(response=>{
        alert("deleted")
        window.location.reload(false)
      })
    }
const updatestudents=(value)=>{
  setSinglevalue(value);
  setupdate(true);

}
var finalJSX =<TableContainer>
<Table>
    <TableHead>
        <TableRow>
        
                
                   <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>grade</TableCell>
                    <TableCell>delete</TableCell>
            
        </TableRow>
    </TableHead>
<TableBody>
    {students.map((value,index)=>{
        return<TableRow>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.name}</TableCell>
            <TableCell>{value.grade}</TableCell>
            <TableCell>
              <Button onClick={()=>deletestudents(value.id)}>delete </Button>                   
               </TableCell>
               <TableCell>
              <Button onClick={()=>updatestudents(value)}>update </Button>                   
               </TableCell>
        </TableRow>
    })}
</TableBody>



</Table>
</TableContainer>
if(update)
finalJSX = <Addstudents data={singleValue} method="put"/>
  return (
    
    <div>
    {finalJSX}
      
    </div>
  )
}

export default Read

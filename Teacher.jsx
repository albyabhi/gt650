import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Teacher = () => {
    var[teacher,setteacher]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/teacher")
        .then(response=>{
            console.log(response.data)
            setteacher(teacher=response.data)
        })
        .catch(err=>console.log(err))
    })
  return (
    <div>
        <Typography>Welcome to my app</Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                
                        
                           <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>grade</TableCell>
                    
                </TableRow>
            </TableHead>
        <TableBody>
            {teacher.map((value,index)=>{
                return<TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.class}</TableCell>
                </TableRow>
            })}
        </TableBody>
        
        
        
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default Teacher

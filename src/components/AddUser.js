import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';

function AddUser() {
  let [Student,setStudent]=useState("")
  let [Email,setEmail]=useState("")
  let [Mobile,setMobile]=useState("")
  let [Teacher,setTeacher]=useState("")
  let [Batch,setBatch]=useState("")
  let navigate = useNavigate()

  
  let handlesave = async ()=>{
    try {
      let res = await axios.post(`${'https://647c2924c0bae2880ad06e11.mockapi.io/users'}`,{
        Student,
        Email,
        Mobile,
        Teacher,
        Batch
      })
      if(res.status===201)
        navigate('/users')
    } catch (error) {
      console.log(error)
    }
  }
  return<div className='container'>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create Users</h1>
    </div>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Student</Form.Label>
        <Form.Control type="name" placeholder="Student Name" onChange={(e)=>setStudent(e.target.value)}/>
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Emile</Form.Label>
        <Form.Control type="Email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Teacher</Form.Label>
        <Form.Control type="name" placeholder="Teacher Name"onChange={(e)=>setTeacher(e.target.value)} />
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="name" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handlesave()}>
        Submit
      </Button>
    </Form>
  </div>
}

export default AddUser
import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser({users,setUsers}) { 
let params=useParams() 
let [Name,setName]=useState()
let [Email,setEmail]=useState()
let [Mobile,setMobile]=useState()
let [Address,setAddress]=useState()
let [Batch,setBatch]=useState()
let navigate = useNavigate()

let handlesave = ()=>{
let  newArray = [...users]
newArray.splice(params.id,1,{
  Name,
  Email,
  Mobile,
  Address,
  Batch,
})
setUsers(newArray)
navigate('/users')
}
useEffect(()=>{
if(params.id < users.length)
{
setName(users[params.id].Name)
setEmail(users[params.id].Email)
setMobile(users[params.id].Mobile)
setAddress(users[params.id].Address)
setBatch(users[params.id].Batch)
}
else
{
  alert("invalid id")
  navigate("/users")
}
})
return<div className='container'>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit Users</h1>
  </div>
    <Form>
    <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Name" value={Name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Emile</Form.Label>
      <Form.Control type="Email" placeholder="Enter Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Mobile</Form.Label>
      <Form.Control type="number" placeholder="Enter Mobile" value={Mobile} onChange={(e)=>setAddress(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Address</Form.Label>
      <Form.Control type="name" placeholder="Enter Address" value={Address} onChange={(e)=>setMobile(e.target.value)} />
    </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Batch</Form.Label>
      <Form.Control type="name" placeholder="Enter Batch" value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>
    
    <Button variant="primary" onClick={()=>handlesave()}>
      Submit
    </Button>
  </Form>
</div>
}

export default EditUser
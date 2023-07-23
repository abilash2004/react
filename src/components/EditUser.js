import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser({users,setUsers}) { 
let params=useParams() 
let [Name,setName]=useState(users[params.id].Name)
let [Email,setEmail]=useState(users[params.id].Email)
let [Mobile,setMobile]=useState(users[params.id].Mobile)
let [Address,setAddress]=useState(users[params.id].Address)
let [Batch,setBatch]=useState(users[params.id].Batch)
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
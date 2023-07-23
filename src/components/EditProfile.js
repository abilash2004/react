import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
function EditProfile({ownusers,setUsersdata}) {
    let params=useParams() 
    let [firstname,setfirstname]=useState(ownusers[params.id].firstname)
    let [lastname,setlastname]=useState(ownusers[params.id].lastname)
    let [username,setusername]=useState(ownusers[params.id].username)
    let [email,setemail]=useState(ownusers[params.id].email)
    let [mobile,setmobile]=useState(ownusers[params.id].mobile)
    let [batch,setbatch]=useState(ownusers[params.id].batch)
    let [password,setpassword]=useState(ownusers[params.id].password)
    let navigate = useNavigate()
    
    let handlesave = ()=>{
    let  newArray = [...ownusers]
    newArray.splice(params.id,1,{
      firstname,
      lastname,
      username,
      email,
      mobile,
      batch,
      password,
    })
    setUsersdata(newArray)
    navigate('/users')
    }
  return <div className='container'>
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit Profile</h1>
  </div>
    <Form>
    <Form.Group className="mb-3" >
      <Form.Label>firstname</Form.Label>
      <Form.Control type="name" placeholder="Enter Name" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
    </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>lastname</Form.Label>
      <Form.Control type="name" placeholder="Enter Name" value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>username</Form.Label>
      <Form.Control type="name" placeholder="Enter User Name" value={username} onChange={(e)=>setusername(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)} />
    </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>mobile</Form.Label>
      <Form.Control type="number" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setmobile(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>batch</Form.Label>
      <Form.Control type="name" placeholder="Enter batch" value={batch} onChange={(e)=>setbatch(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>password</Form.Label>
      <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    </Form.Group>
    
    <Button variant="primary" onClick={()=>handlesave()}>
      Submit
    </Button>
  </Form>
</div>
}

export default EditProfile
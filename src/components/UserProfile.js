import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function UserProfile({ownusers,setUsersdata}) {
    let navigate = useNavigate()
  return (  
    <div> 
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Profile</h1>
        </div>
        <div div className='container'>
  <Container>
    <Row>
      <Col xs={1} md={1}>
        <Image src="https://logodix.com/logo/565323.png"  width={200}  />
      </Col>
    </Row>
  </Container>
  </div>
  <br/>
  <div className='container'>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
         < th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Password</th>
          <th>Edit Data</th>
        </tr>
      </thead>
      <tbody>
        {
      ownusers && ownusers.map((e,i)=>{
            return <tr key={i}>
              <td>{e.firstname}</td>
              <td>{e.lastname}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.batch}</td>
              <td>{e.password}</td>
              <td>
    <Button variant="primary" onClick={
                ()=>{navigate(`/edit-profile/${i}`)}}  >Edit</Button>
                </td>
              </tr>
          })
      }
      
      </tbody>
    </Table>
  </div>
  </div>
  )
}

export default UserProfile
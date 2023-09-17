import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function EditUser() {
  const params = useParams();
  const navigate = useNavigate();

  const [Student, setStudent] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Teacher, setTeacher] = useState("");
  const [Batch, setBatch] = useState("");

  const handleSave = async () => {
    try {
      const res = await axios.put(
        `https://647c2924c0bae2880ad06e11.mockapi.io/users/${params.id}`,
        {
          Student,
          Email,
          Mobile,
          Teacher,
          Batch
        }
      );
      if (res.status === 200) {
        navigate('/users');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `https://647c2924c0bae2880ad06e11.mockapi.io/users/${params.id}`
      );
      if (res.status === 200) {
        const userData = res.data;
        setStudent(userData.Student);
        setEmail(userData.Email);
        setMobile(userData.Mobile);
        setTeacher(userData.Teacher);
        setBatch(userData.Batch);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getUserData();
    } else {
      navigate('/users');
    }
  },);

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Student</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student Name"
            value={Student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teacher</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teacher Name"
            value={Teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Batch</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Batch"
            value={Batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={()=>handleSave()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditUser;

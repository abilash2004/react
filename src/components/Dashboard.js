import React, { useContext, useEffect, useState } from 'react';
import Card from "./Card";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Dashboardcontext } from './context/Dashboardcontextcomponent';
import axios from 'axios';

function Dashboard() { 
  const dashboard = useContext(Dashboardcontext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleDelete =async (i) => {  
    try {
      let res = await axios.delete(`${'https://647c2924c0bae2880ad06e11.mockapi.io/users'}/${i}`)
      if (res.status===200)
      {getUsers() }
    } catch (error) {
      console.log(error)
    }
  };

  const getUsers = async () => {
    try {
      // fetch(`${'https://647c2924c0bae2880ad06e11.mockapi.io/users'}`)
      // .then(res=>res.json())
      // .then(data=>setUsers(data))
let res = await axios.get(`${'https://647c2924c0bae2880ad06e11.mockapi.io/users'}`)
setUsers(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">List Users</h1>
          <button
  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
  onClick={() => {}}>
  <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
</button>
        </div>
        <div className="row">
          {dashboard.data.map((e, i) => (
            <Card
              key={i}
              title={e.title}
              value={e.value}
              color={e.color}
              icon={e.icon}
              isProgress={e.isProgress}
            />
          ))}
        </div>
      </div>

      <div className='container-fluid'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Teacher</th>
              <th>Batch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e, i) => (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.Student}</td>
                <td>{e.Email}</td>
                <td>{e.Mobile}</td>
                <td>{e.Teacher}</td>
                <td>{e.Batch}</td>
                <td>
                  <Button variant="primary" onClick={() => navigate(`/edit-user/${e.id}`)}>Edit</Button>
                  &nbsp;
                  <Button variant="danger" onClick={() => handleDelete(e.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
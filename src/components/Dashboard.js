import React, { useContext } from 'react'
import Card from "./Card";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContextComponent';
import { Dashboardcontext } from './context/Dashboardcontextcomponent';

function Dashboard() { 
  let context = useContext(UserContext) 
  let dashboard= useContext( Dashboardcontext)
let navigate = useNavigate()

  let handleDelete = (i)=> {  
  let newUsers = [...context.users]
  newUsers.splice(i,1)
  context.setUsers(newUsers)
}
  return <>
     <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">List Users</h1>
                <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div className="row">

                {
                  dashboard.data.map((e,i)=>{
                    return <Card key={i}
                    title={e.title}
                    value={e.value}
                    color={e.color}
                    icon={e.icon}
                    isProgress={e.isProgress}
                    />
                  })
                }


            </div>
        </div>
        <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody>
        {
          context.users && context.users.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.Name}</td>
              <td>{e.Email}</td>
              <td>{e.Mobile}</td>
              <td>{e.Address}</td>
              <td>{e.Batch}</td>
              <td>
              <Button variant="primary" onClick={
                ()=>{navigate(`/edit-user/${i}`)}} >Edit</Button>
              &nbsp;
              <Button variant="danger" onClick={
                ()=>handleDelete(i)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </div>
  </>
}

export default Dashboard
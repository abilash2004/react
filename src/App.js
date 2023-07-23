import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
function App() {
  let [users,setUsers] =useState([
    {
      Name:"abilash",
      Email:"ksrabilash@gmail.com",
      Address:"2324, flot 24, park avanue 1st street ,uk",
      Mobile:"9999999999",
      Batch:"B46WET"
    },
    {
      Name:"abilashSR",
      Email:"abilash2004@gmail.com",
      Address:"2324, flot 24, park avanue 1st street ,usa",
      Mobile:"4564734355",
      Batch:"B46WET"
    },
    {
      Name:"amarnath",
      Email:"amarnath24@gmail.com",
      Address:"2324, flot 24, park avanue 1st street ,usa",
      Mobile:"4564734755",
      Batch:"B46WET"
    },
  ]) 
  let [ownusers,setUsersdata] =useState([
    {
      firstname:"Abilash",
      lastname:"SenthilKumar",
      username:"abilash@2004",
      email:"ksrabilash@gmail.com",
      mobile:"7825941432",
      batch:"B46WET",
      password:"abilash2004",
    }])
  return  <>
<BrowserRouter>
<div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Routes>
          <Route path="/users" element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path='/create-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path='/edit-user/:id'element={<EditUser users={users} setUsers={setUsers}/>}/>
          <Route path="/profile/:id"element={<UserProfile ownusers={ownusers} setUsersdata={setUsersdata}/>}/>
          <Route path="/edit-profile/:id"element={<EditProfile ownusers={ownusers} setUsersdata={setUsersdata}/>}/>/>}/>
        </Routes>
      


      </div>
      </div>
      </div> 
      </BrowserRouter>
      </>
      
}

export default App;
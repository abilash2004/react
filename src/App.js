import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
import Details from "./components/Details/Details";
import Accounts from './components/Details/Accounts.js'
import Bill from './components/Details/Bill'
import Password from './components/Details/Password'
import Payments from './components/Details/Payments'
import Profile from './components/Details/Profile'
import UserContextComponent from "./components/context/UserContextComponent";
import Dashboardcontextcomponent from "./components/context/Dashboardcontextcomponent";
function App() {
  
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
          <Route path="/users" element={<UserContextComponent>
            <Dashboardcontextcomponent>
              <Dashboard/>
            </Dashboardcontextcomponent>
            </UserContextComponent>}/>
          <Route path='/create-user' element={<UserContextComponent><AddUser/></UserContextComponent>}/>
          <Route path='/edit-user/:id'element={<UserContextComponent><EditUser/></UserContextComponent>}/>
          <Route path="/profile/:id"element={<UserProfile ownusers={ownusers} setUsersdata={setUsersdata}/>}/>
          <Route path="/edit-profile/:id"element={<EditProfile/>}/>
          <Route path="*"element={<Navigate to="/users"/>}/>
          <Route path="/hooks"element={<Details/>}>
          <Route path='useRef' element={<Accounts/>}/>
            <Route path='bill' element={<Bill/>}/>
            <Route path='useReducer' element={<Password/>}/>
            <Route path='payments' element={<Payments/>}/>
            <Route path='profile' element={<Profile/>}/>
          </Route>
        </Routes>


      </div>
      </div>
      </div> 
      </BrowserRouter>
      </>
      
}

export default App;
import React,{useState,useEffect} from 'react'
import "./Details.css"
import { Outlet, useNavigate,useLocation } from 'react-router-dom'


function Details() {
  sessionStorage.setItem('username',"abilash")
    let location = useLocation()
    let [currentPage,setCurrentPage] = useState(1)
    let navigate = useNavigate()
  
    useEffect(()=>{
      console.log('Location Changed',location)
     },[location])
  return (
    <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Details</h1>
    </div>
    <div className='section-navigator'>
<ul>
     <li className={currentPage===1?"activepage":""} onClick={()=>{setCurrentPage(1);navigate("accounts")}}>Accounts</li>
     <li className={currentPage===2?"activepage":""} onClick={()=>{setCurrentPage(2);navigate("payments")}}>Payments</li>
     <li className={currentPage===3?"activepage":""} onClick={()=>{setCurrentPage(3);navigate("bill")}}>Details</li>
     <li className={currentPage===4?"activepage":""} onClick={()=>{setCurrentPage(4);navigate("profile")}}>Profile</li>
     <li className={currentPage===5?"activepage":""} onClick={()=>{setCurrentPage(5);navigate("password")}}>Change Password</li>
</ul>
    </div>
    <div className='section'>
        <Outlet/>
    </div>
    </>
  )
}

export default Details
import React, { useEffect, useState,useRef } from 'react'
import { Button } from 'react-bootstrap'

function Accounts() {
  let [setCount] = useState(0)
  let [setName] = useState ("")
  let countRef = useRef(0) 
  let inputuseRef1 = useRef()
  let inputuseRef2 = useRef()
  let inputuseRef3 = useRef()  
  let inputuseRef4 = useRef()
  

  useEffect(()=>{
    inputuseRef1.current.focus()
    countRef.current++
})
let handleSubmit = ()=>{
  alert(""+
   inputuseRef1.current.value+
   inputuseRef2.current.value+
   inputuseRef3.current.value+
   inputuseRef4.current.value)
} 
  return <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">useRef section</h1>
    </div>
    <input type='text' placeholder='Name' onChange={(e)=>{
    setName(e.target.value)
    setCount(prev=>prev+1)
    }} >
    </input>
    <p>the components have redered {countRef.current
  } </p>
  
    
  <h1>Enter OTP</h1>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <input type='number'ref={inputuseRef1} onChange={(e)=>inputuseRef2.current.focus()}/>
    <input type='number'ref={inputuseRef2} onChange={(e)=>inputuseRef3.current.focus()}/>
    <input type='number'ref={inputuseRef3} onChange={(e)=>inputuseRef4.current.focus()}/>
    <input type='number'ref={inputuseRef4} onChange={handleSubmit}/>
    </div>
    <div>
    <Button onClick={handleSubmit}>Submit</Button>
    </div>
    </>
    
}

export default Accounts
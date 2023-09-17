import React, { useReducer,useState } from 'react'
import { Button } from 'react-bootstrap'

function reducer ( state,payload){
switch(payload.action)

{
  case "INC" : return {...state, count:state.count+1}

  case "DCE" : return {...state, count:state.count-1}
}




}

function Password() {
  let [state,dispatch] = useReducer(reducer,{count:0})
  return <>
<div className="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 className="h3 mb-0 text-gray-800">useReducer</h1>
</div>
<div>
  <Button onClick={()=>{dispatch({action:"DCE"})}}>-</Button>
  &nbsp;
  {state.count}
  &nbsp;
  <Button onClick={()=>{dispatch({action:"INC"})}}>+</Button>
</div>
</>
}

export default Password
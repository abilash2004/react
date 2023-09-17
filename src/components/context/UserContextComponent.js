import React , {useState} from 'react'
export const UserContext = React.createContext()
function UserContextComponent({children}) {
let [users,setUsers] =useState([
    {
      Student:"abilash",
      Email:"ksrabilash@gmail.com",
      Mobile:"9999999999",
      Teacher:"naga",
      Batch:"B46WET"
    },
    {
      Student:"abilashSR",
      Email:"abilash2004@gmail.com",
      Mobile:"4564734355",
      Teacher:"naga",
      Batch:"B46WET"
    },
    {
      Student:"amarnath",
      Email:"amarnath24@gmail.com",
      Mobile:"4564734755",
      Teacher:"naga",
      Batch:"B46WET"
    }])
  return <>
  <UserContext.Provider value={{users,setUsers}}>
   {children}
      </UserContext.Provider>
  </>
}

export default UserContextComponent
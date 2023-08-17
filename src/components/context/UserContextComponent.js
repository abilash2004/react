import React , {useState} from 'react'
export const UserContext = React.createContext()
function UserContextComponent({children}) {
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
    }])
  return <>
  <UserContext.Provider value={{users,setUsers}}>
   {children}
      </UserContext.Provider>
  </>
}

export default UserContextComponent
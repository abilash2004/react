import React from 'react' 
export const Dashboardcontext = React.createContext()

function Dashboardcontextcomponent({children}) {
    let data = [
        {
          title:"Earnings (Monthly)",
          value:"$40,000",
          color:"primary",
          icon:"fa-calendar",  
          isProgress:false
        },
        {
          title:"Earnings (Anual)",
          value:"$160,000",
          color:"success",
          icon:"fa-dollar-sign",
          isProgress:false
        },
        {
          title:"Task",
          value:"100%",
          color:"info",
          icon:"fa-clipboard-list",
          isProgress:true
        },
        {
          title:"Pending Request",
          value:"18",
          color:"warning",
          icon:"fa-comments",
          isProgress:false
        }
      ]
  return <Dashboardcontext.Provider value={{data}}>
  {children}
  </Dashboardcontext.Provider>
}
export default Dashboardcontextcomponent
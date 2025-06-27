import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  
   
   const User = localStorage.getItem('userExist')    
    // console.log(User)
    if(User){
        return children
    }else{
        return(
<>
    
             <Navigate to="/login"/>

</>
        )
    }
}

export default ProtectedRoute

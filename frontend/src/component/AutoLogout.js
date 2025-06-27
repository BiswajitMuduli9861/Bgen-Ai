import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AutoLogout = () => {

    const navigate = useNavigate();
    useEffect(()=>{

        // console.log("auto logout")
        setTimeout(() => {
            localStorage.removeItem("userExist");
            // console.log("set Time Out");
            navigate("/login");
        }, 60 * 60 * 1000); // 1 hour in milliseconds 
    

},[])

return null
}
export default AutoLogout

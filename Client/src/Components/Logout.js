import React, { useEffect , useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {userContext} from '../App'

function Logout() {
    const navigate=useNavigate();
    const{state,dispatch}=useContext(userContext);

    useEffect(() => {
      fetch('/logout',{
        method:"get",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/son"
        },
        credentials:"include",
      }).then(res=>{
            navigate('/login')
            if(res.status!==200){
              dispatch({type:'USER',payload:false})
              const error= new Error(res.error)
              throw error
            }
      }).catch(err=>console.log(err))

    })
    
  return (
    <div>Logout</div>
  )
}

export default Logout

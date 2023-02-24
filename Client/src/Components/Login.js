import React, { useState , useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {userContext} from '../App'


function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();
  const{state,dispatch}=useContext(userContext);




  const loginUser=async(e)=>{
    e.preventDefault();
    const res= await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })

    const data= await res.json()
    
    if(res.status === 400 || !data){
      alert('Invalid Credentials')
    }
    else{      
        alert('login Successfull!')
          navigate('/')
        dispatch({type:"USER", payload:true})
    }
    

  }

  return (
    <form className='container w-75 mt-5' onSubmit={loginUser} >
    <h2 className='text-center my-2'>Login</h2>
    <div className='card p-3'>  
  <div className="mb-2">
    <label forhtml="exampleInputEmail1" className="form-label">Email Adress</label>
    <input required={true}  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-2">
    <label forhtml="password" className="form-label">Password</label>
    <input required={true} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name='password' className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" name='login' className="btn btn-primary w-100">Submit</button>
  <Link to='/signup' style={{textDecoration:'none',textAlign:'center',marginTop:'3px'}}><span>Don't have an account?</span></Link>
  </div>
  </form>

  )
}

export default Login

   
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


function Contact() {

  const [contact, setContact] = useState({name:"",email:"",phone:"",message:""})

  const userContact=async()=>{
  try {
    const res= await fetch('/getData',{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })


    const data=await res.json();      
    setContact({...contact,name:data.name,email:data.email,phone:data.phone})
    
    
    if(!res.status===200){
        const error= new Error(res.error)
        throw error
      }
      
    } catch (error) {
      console.log(error)
      // navigate('/signup')
  }
}

useEffect(() => {
  userContact()
},[])


const handleInputs=(e)=>{

  const name=e.target.name;
  const value=e.target.value;
  setContact({...contact, [name]:value})
  
}


const handleSubmit=async(e)=>{

    e.preventDefault();

    const {name, email, phone, message}=contact;

    const res=await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    })


    const data =await res.json();
    console.log(message)

    if(!data){
      console.log("message not sent");
    }else{
      alert('Message sent sucessfully!')
      setContact({...contact, message:""})
    }


}


  return (
    <form  method="POST" className='container w-75' >
    <h2 className='text-center my-2'>Contact us</h2>
    <div className='card p-3'>  

  <div className="mb-2">
    <label forhtml="name" className="form-label">Name </label>
    <input type="text" onChange={handleInputs} value={contact?.name} name='name' className="form-control" id="text" />
  </div>
  <div className="mb-2">
    <label forhtml="exampleInputEmail1" className="form-label">Phone No</label>
    <input type="text" name='phone' onChange={handleInputs} value={contact?.phone} className="form-control"  aria-describedby="emailHelp" />
  </div>
  <div className="mb-2">
    <label forhtml="exampleInputEmail1" className="form-label">Email Adress</label>
    <input type="email" name='email' onChange={handleInputs} value={contact?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-2">
    <label forhtml="message" className="form-label">Message</label>
  <textarea className="form-control text-primary" name="message" onChange={handleInputs} value={contact.message}  placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"120px"}} required={true}>
  </textarea>
  </div>
  
  <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100">Submit</button>
  <Link to='/login' style={{textDecoration:'none'}}></Link>
  </div>
</form> 
  )
}

export default Contact

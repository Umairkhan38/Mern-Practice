import React, { useEffect, useState } from "react";

function Home() {

  const [login,setLogin]=useState({});

  const isLogin=async()=>{
    try {
        const res=await fetch('/getData',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        })

      const data = await res.json();
      setLogin({name:data.name})  
      if(!res.status===200){
          const error=new Error(res.error)
          throw error
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      isLogin();
  }, [])
  


  return (
    <div className="d-flex text-center align-items-center text-bg-dark container w-100" 
  style={{height:'91vh',backgroundImage:"url(https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)", backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'1500px' }} >
    <main className="px-3">
    <h1>Welcome,</h1>
    <h2>{!login.name? "to the Web Development" :login.name}</h2>
    <hr />
    <p className="lead mx-3">You are a computer. If you become front-end you'll count the likes on social media. If you become back-end you'll be breathing deep on a mountain</p>
    <p className="lead mx-3">A programming language is for thinking about programs, not for expressing programs you've already thought of It should be a pencil, not a pen.
    </p>
  </main>
  </div>
  );
}

export default Home;

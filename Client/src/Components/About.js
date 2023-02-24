import React, { useState,useEffect } from "react";
import user from "../assets/user.PNG";
import icon from "../assets/user-solid.svg";
import {useNavigate} from 'react-router-dom'

function About() {
  const navigate= useNavigate();
  const [change, setChange] = useState(false);
  const [userData, setUserdata]=useState();

  const toggle = (handler) => {
    setChange(handler);
  };

  const callAbout=async()=>{

    try {
      const res= await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include",
      })


      const data=await res.json();      
      setUserdata(data)

      
      if(!res.status===200){
          const error= new Error(res.error)
          throw error
        }
        
      } catch (error) {
        console.log(error)
        navigate('/signup')
    }
  
  }

  useEffect(() => {
    callAbout()
  },[])
  
  
  return (
    <div className="container">
      <h1 className="text-center my-2">About us</h1>
      <div className="col-md-6 my-3 container w-100 ">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative shadow  bg-body-tertiary rounded">
          <div className="col-auto d-none w-25 d-lg-block">
            <img
              className="card bd-placeholder-img  w-75 p-1 m-2 rounded-3"
              height="150"
              src={userData?.error?icon:user}
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
          </div>
          <div className="col p-4 d-flex flex-column position-static ">
            <div className="d-flex justify-content-between">
              <h4 className="d-inline-block mb-2 ">{userData?.name}</h4>
              <p type="button" className="btn btn-success btn-sm w-25">
                Edit
              </p>
            </div>

            <h5 className="mb-2 text-primary">{userData?.work}</h5>
            <div className="mb-0 text-muted">DOB : 12/07/2001</div>
            <hr />
            <p className="card-text mb-auto mx-3">
              Life is too short for ordinary apps Put your creativity on the
              development highway Let all your ideas bloom. Then build the best
              app for your idea! 🍃💥 Zero to app in no time
            </p>
            <div className="card text-center mt-4">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      onClick={() => toggle(false)}
                    >
                      About
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link active mx-2"
                      onClick={() => toggle(true)}
                    >
                      Timeline
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {!change ? (
                  <>
                    <div className="d-flex justify-content-between">
                      <p className="card-text">UserId</p>
                      <p className="mx-5 text-primary fw-semibold">{userData?._id}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-text">Name</p>
                      <p className="mx-5 text-primary fw-semibold">
                        {userData?.name}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-text">Email</p>
                      <p className="mx-5 text-primary fw-semibold">
                        {userData?.email}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-text">Phone No</p>
                      <p className="mx-5 text-primary fw-semibold">
                        {userData?.phone}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-text">Proffession</p>
                      <p className="mx-5 text-primary fw-semibold">
                        {userData?.work}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex justify-content-between">
                      <p className="card-text">Proffession</p>
                      <p className="mx-5 text-primary fw-semibold">
                        {userData?.work}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

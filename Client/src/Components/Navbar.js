import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/logo.png'
import {userContext} from '../App'


function Navbar() {

  const {state,dispatch}=useContext(userContext);
  console.log(state);

  return (
    <nav className="navbar navbar-expand-lg  bg-light shadow-sm bg-body-tertiary rounded">
    <div className="container-fluid">
      <Link to='/'   style={{textDecoration:"none",color:"#272727",fontSize:"1.65rem",fontWeight:'600'}}><img className="navbar-brand" src={logo} alt='logo' style={{ borderRadius:"8px", padding:"4px 6px"}} width='70' />QuickCode.com</Link>

      <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-4">
          <li className="nav-item">
            <Link className="nav-link text-dark active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/signup">SignUp</Link>
          </li>

{ state?
    (         <li className="nav-item">
            <Link className="nav-link text-dark" onClick={()=>window.location.reload()} to="/logout">Logout</Link>
          </li>
) :(   <li className="nav-item">
            <Link className="nav-link text-dark" to="/login">Login</Link>
          </li>
)
        }
        </ul>
    </div>
  </nav>
  )
}

export default Navbar


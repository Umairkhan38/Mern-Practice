import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='container w-100'>
    <div className="d-flex text-center align-items-center justify-content-center text-bg-light  " 
    style={{height:'91vh' }} >
      <main className="px-3">
      <h1>404 <br />oops, Page not found!</h1>
      <hr />
      <p className="lead mx-3">Sorry the page for which you are looking has been removed, or is temporarily unavailable </p>
      <Link to='/' style={{textDecoration:'none'}}><button className='btn btn-lg btn-primary rounded-5'>BACK TO HOME PAGE</button> </Link>
    </main>
    </div>
    </div>
  )
}

export default Error
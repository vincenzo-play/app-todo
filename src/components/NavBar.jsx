import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const NavBar = () => {
  return (
    <nav className="navbar bg-primary">
    <div className="container">
      <div className="navbar-brand" >
     <div className='d-flex text-white'>
        <FontAwesomeIcon icon="fa-solid fa-spell-check" />
        <p className='m-0 fw-bold mx-1'>ToDo</p>
     </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
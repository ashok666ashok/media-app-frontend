import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import musicIcon from './musicIcon.png'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
        <Navbar className="bg-dark p-3 fw-bolder">
        
          <Link to='/' style={{textDecoration:'none', marginLeft:'20px',fontWeight:'200px'}}>
          <Navbar.Brand  className='fw-bolder text-light containerFluid'>
            <img
              alt=""
              src={musicIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media-Player
          </Navbar.Brand>
          </Link>
        
      </Navbar>
    </div>
  )
}

export default Header
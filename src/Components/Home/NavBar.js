import React from 'react'
import './Home.css'
import { Dropdown, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <div>
        <Nav className='NavMain px-5 d-flex justify-content-between'>
        <div className='d-flex'>
        <Nav.Item className=''>
        <p className='mt-2 text-dark me-3'>About</p>
      </Nav.Item>
      <Nav.Item>
      <p className='mt-2 text-dark me-3'>Contact</p>
      </Nav.Item>
      <Nav.Item>
      <p className='mt-2 text-dark me-3'>Help</p>
      </Nav.Item>
      <Nav.Item>
      <p className='mt-2 text-dark'>FAQs</p>
      </Nav.Item>
        </div>
        <div className='d-flex py-1'>
        <Dropdown className='me-2'>
      <Dropdown.Toggle className='bg-white text-dark border-0 rounded-0' id="dropdown-basic">
        My Account
      </Dropdown.Toggle>
      <Dropdown.Menu className='Nav_Dropdown rounded-0 '>
        <Dropdown.Item href="#/action-1">Sign In</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sign Up</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='me-2'>
      <Dropdown.Toggle className='bg-white text-dark border-0 rounded-0' id="dropdown-basic">
        USD
      </Dropdown.Toggle>
      <Dropdown.Menu className='rounded-0 '>
        <Dropdown.Item href="#/action-1">EUR</Dropdown.Item>
        <Dropdown.Item href="#/action-2">GBP</Dropdown.Item>
        <Dropdown.Item href="#/action-3">CAD</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className='bg-white text-dark border-0 rounded-0' id="dropdown-basic">
        EN
      </Dropdown.Toggle>
      <Dropdown.Menu className='rounded-0'>
        <Dropdown.Item href="#/action-1">FA</Dropdown.Item>
        <Dropdown.Item href="#/action-2">AR</Dropdown.Item>
        <Dropdown.Item href="#/action-2">RU</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </div>

    </Nav>
    </div>
  
  )
}

export default NavBar
import React from 'react'
import './Shop.css'
import { Breadcrumb, Nav } from 'react-bootstrap'

function CommonNav(props) {

      const {title,name} = props

  return (
    <div className='pt-4 pb-4'>
        <div className="col-lg-12 bg-white">
        <Nav className='pt-3 ps-3'>
        <Breadcrumb >
      <Breadcrumb.Item className='text-dark text-decoration-none' active>Home</Breadcrumb.Item>
      <Breadcrumb.Item className='text-dark' active>
        {title}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{name}</Breadcrumb.Item>
    </Breadcrumb>
    </Nav>
        </div>

    </div>
  )
}

export default CommonNav
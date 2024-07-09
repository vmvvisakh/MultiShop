import React, { useState } from 'react'
import './ShoppingCart.css'
import ScrollButton from '../../ScrollButton/ScrollButton'
import CommonNav from '../../Shop/CommonNav'
import { Card, Form } from 'react-bootstrap'
import product1 from '../../../assets/product1.jpg'
import { height } from '@fortawesome/free-regular-svg-icons/faAddressBook'
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Content() {
    const [cartValue,setCartValue] = useState(0)

  return (
    <div className='ShoppingCartDetailsMain px-5'>
    <ScrollButton />
    <CommonNav name='ShoppingCart' />
    <div className="row">
        <div className="col-md-8">
        <Card className='bg-dark text-white text-center rounded-0 p-1 px-2 fw-bold'>
        <div className='row mt-2 ps-4'>
        <div className="col-md-3 ">
        <p>Products</p>
        </div>
        <div className="col-md-2">
        <p>Price</p>
        </div>
        <div className="col-md-2">
        <p>Quantity</p>
        </div>
        <div className="col-md-2">
        <p>Total</p>        
        </div>
        <div className="col-md-2">
        <p>Remove</p>        
        </div>
        </div>
        </Card>

        <Card className='ShoppingCartDarkCard text-primary text-center rounded-0 p-2 px-2 mt-4 border-0'>
        <div className='row mt-2 ps-4'>
        <div className="col-md-3 d-flex ">
        <img src={product1} className='img-fluid' alt="" style={{width:'50px',height:'40px'}} />
        <p>Product Name</p>
        </div>
        <div className="col-md-2">
        <p>$150</p>
        </div>
        <div className="col-md-2 text-center">
        <div className='d-flex '>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue-1)}><FontAwesomeIcon  icon={faMinus} /></button>
                        <input type="text" className="form-control btnOperationinput text-normal bg-light border-0 text-center px-2 rounded-0" value={cartValue}></input>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue+1) }><FontAwesomeIcon  icon={faPlus} /></button>
                      </div>
        </div>
        <div className="col-md-2">
        <p>$150</p>        
        </div>
        <div className="col-md-2">
        <button className='bg-danger text-white border border-0 px-2 btnOperation ms-3 h-75' ><FontAwesomeIcon  icon={faX} /></button>
        </div>
        </div>
        </Card>

        <Card className='ShoppingCartDarkCard text-primary text-center rounded-0 p-2 px-2 mt-4 border-0'>
        <div className='row mt-2 ps-4'>
        <div className="col-md-3  d-flex ">
        <img src={product1} className='img-fluid' alt="" style={{width:'50px',height:'40px'}} />
        <p>Product Name</p>
        </div>
        <div className="col-md-2">
        <p>$150</p>
        </div>
        <div className="col-md-2 text-center">
        <div className='d-flex '>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue-1)}><FontAwesomeIcon  icon={faMinus} /></button>
                        <input type="text" className="form-control btnOperationinput text-normal bg-light border-0 text-center px-2 rounded-0" value={cartValue}></input>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue+1) }><FontAwesomeIcon  icon={faPlus} /></button>
                      </div>
        </div>
        <div className="col-md-2">
        <p>$150</p>        
        </div>
        <div className="col-md-2">
        <button className='bg-danger text-white border border-0 px-2 btnOperation ms-3 h-75' ><FontAwesomeIcon  icon={faX} /></button>
        </div>
        </div>
        </Card>

        <Card className='ShoppingCartDarkCard text-primary text-center rounded-0 p-2 px-2 mt-4 border-0'>
        <div className='row mt-2 ps-4'>
        <div className="col-md-3  d-flex ">
        <img src={product1} className='img-fluid' alt="" style={{width:'50px',height:'40px'}} />
        <p>Product Name</p>
        </div>
        <div className="col-md-2">
        <p>$150</p>
        </div>
        <div className="col-md-2 text-center">
        <div className='d-flex '>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue-1)}><FontAwesomeIcon  icon={faMinus} /></button>
                        <input type="text" className="form-control btnOperationinput text-normal bg-light border-0 text-center px-2 rounded-0" value={cartValue}></input>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue+1) }><FontAwesomeIcon  icon={faPlus} /></button>
                      </div>
        </div>
        <div className="col-md-2">
        <p>$150</p>        
        </div>
        <div className="col-md-2">
        <button className='bg-danger text-white border border-0 px-2 btnOperation ms-3 h-75' ><FontAwesomeIcon  icon={faX} /></button>
        </div>
        </div>
        </Card>

        <Card className='ShoppingCartDarkCard text-primary text-center rounded-0 p-2 px-2 mt-4 border-0'>
        <div className='row mt-2 ps-4'>
        <div className="col-md-3  d-flex ">
        <img src={product1} className='img-fluid' alt="" style={{width:'50px',height:'40px'}} />
        <p>Product Name</p>
        </div>
        <div className="col-md-2">
        <p>$150</p>
        </div>
        <div className="col-md-2 text-center">
        <div className='d-flex '>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue-1)}><FontAwesomeIcon  icon={faMinus} /></button>
                        <input type="text" className="form-control btnOperationinput text-normal bg-light border-0 text-center px-2 rounded-0" value={cartValue}></input>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue+1) }><FontAwesomeIcon  icon={faPlus} /></button>
                      </div>
        </div>
        <div className="col-md-2">
        <p>$150</p>        
        </div>
        <div className="col-md-2">
        <button className='bg-danger text-white border border-0 px-2 btnOperation ms-3 h-75' ><FontAwesomeIcon  icon={faX} /></button>
        </div>
        </div>
        </Card>

        <Card className='ShoppingCartDarkCard text-primary text-center rounded-0 p-2 px-2 mt-4 border-0'>
        <div className='row mt-2 ps-4'>
        <div className="col-md-3 d-flex ">
        <img src={product1} className='img-fluid' alt="" style={{width:'50px',height:'40px'}} />
        <p>Product Name</p>
        </div>
        <div className="col-md-2">
        <p>$150</p>
        </div>
        <div className="col-md-2 text-center">
        <div className='d-flex '>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue-1)}><FontAwesomeIcon  icon={faMinus} /></button>
                        <input type="text" className="form-control btnOperationinput text-normal bg-light border-0 text-center px-2 rounded-0" value={cartValue}></input>
                        <button className='bg-warning border border-0 px-2 btnOperation' onClick={()=>setCartValue(cartValue+1) }><FontAwesomeIcon  icon={faPlus} /></button>
                      </div>
        </div>
        <div className="col-md-2">
        <p>$150</p>        
        </div>
        <div className="col-md-2">
        <button className='bg-danger text-white border border-0 px-2 btnOperation ms-3 h-75' ><FontAwesomeIcon  icon={faX} /></button>
        </div>
        </div>
        </Card>

        </div>
        <div className="col-md-4 ps-3">
        <Form className='d-flex'>
        <input className='border-0 shoppingCartInput' type="text" />
        <button className='bg-warning border-0 px-3 shoppingCartInputBtn text-nowrap'>Apply Coupon</button>
        </Form>
        <div className='row pt-5'>
        <h5 className='col-md-5 shoppingCartSummary'>CART SUMMARY</h5>
          <div className='col-md-7 shoppingCartSummary border'></div>
          <div className="col-md-12 mt-3">
            <Card className='pt-4 rounded-0 border-0 px-4'>
            <div className='d-flex justify-content-between'>
                <p className='fw-bold'>Subtotal</p>
                <p className='fw-bold'>$150</p>
            </div>
            <div className='d-flex justify-content-between mt-2 border-bottom'>
                <p className='fw-bold'>Subtotal</p>
                <p className='fw-bold'>$10</p>
            </div>
            <div className='d-flex justify-content-between mt-2 '>
                <p className='fw-bold'>Total</p>
                <p className='fw-bold'>$160</p>
            </div>
            <button className='w-100 bg-warning text-center mb-5 mt-3 p-3 border-0 fw-bold'>Proceed To Checkout </button>
            </Card>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Content
import React from 'react'
import '../ShoppingCart/ShoppingCart.css'
import ScrollButton from '../../ScrollButton/ScrollButton'
import CommonNav from '../../Shop/CommonNav'
import { Card } from 'react-bootstrap'

function Content() {
  return (
    <div className='ShoppingCartDetailsMain px-5'>
        <ScrollButton />
        <CommonNav name='Checkout' />
        <div className="row">
            <div className="col-md-8">
            <div className="row pt-2">
            <h5 className='col-md-3 shoppingCartCheckout text-uppercase'>Billing Address</h5>
            <div className='col-md-9 shoppingCartCheckout border'></div>
            </div>
            <div className='bg-white pt-4 mt-3 rounded-0'>
            <div className="row px-3">
            <div class="col-md-6 form-group ">
                            <label>First Name</label>
                            <input className="form-control mt-2 rounded-0" type="text" placeholder="John" />
                        </div>

                        <div class="col-md-6 form-group mb-3">
                            <label>Last Name</label>
                            <input className="form-control mt-2 rounded-0" type="text" placeholder="Doe" />
                        </div>

                        <div class="col-md-6 form-group mb-3">
                            <label>Email</label>
                            <input className="form-control mt-2 rounded-0" type="email" placeholder="john@gmail.com" />
                        </div>

                        <div class="col-md-6 form-group mb-3">
                            <label>Mobile No</label>
                            <input className="form-control mt-2 rounded-0" type="number" placeholder="9545772233" />
                        </div>

                        <div class="col-md-6 form-group mb-3">
                            <label>Address Line1</label>
                            <input className="form-control mt-2 rounded-0" type="text" placeholder="Doe" />
                        </div>

                        <div class="col-md-6 form-group mb-3">
                            <label>Address Line2</label>
                            <input className="form-control mt-2 rounded-0" type="text" placeholder="Doe" />
                        </div>

                        <div class="col-md-6 form-group mb-3">
                            <label>Country</label>
                           
                            <select className="custom-select form-control shadow-none mt-2">
                                <option selected="">United States</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Algeria</option>
                            </select> 
                        </div>

                        <div class="col-md-6 form-group mb-4">
                            <label>City</label>
                            <input className="form-control mt-2 rounded-0" type="text" placeholder="New York" />
                        </div>
                    <div className='mb-4 d-flex'>
                        <input type="checkbox" className='custom-control-input form-check-input' />
                        <p className='custom-control-input m-0 ms-2'>Create an Account</p>
                    </div>
                    <div className='mb-4 d-flex'>
                        <input type="checkbox" className='custom-control-input form-check-input ' />
                        <p className='custom-control-input m-0 ms-2'>Ship to Different Address</p>
                    </div>
                </div> 
            </div>
            
            </div>
            <div className="col-md-4 ps-2">
            <div className="row pt-2">
            <h5 className='col-md-3 shoppingCartCheckoutTotal text-uppercase text-nowrap'>order total</h5>
            <div className='col-md-9 shoppingCartCheckoutTotal border'></div>
            </div>
            <div className='bg-white px-3 pt-3'>
            <p className='fw-bold'>Products</p>
            <div className='border-bottom'>
            <div className='d-flex justify-content-between'>
            <p>Product Name 1</p>
            <p>$150</p>
            </div>
            <div className='d-flex justify-content-between'>
            <p>Product Name 2</p>
            <p>$150</p>
            </div>
            <div className='d-flex justify-content-between'>
            <p>Product Name 3</p>
            <p>$150</p>
            </div>
            </div>
            <div className='pt-3 border-bottom'>
            <div className='d-flex justify-content-between'>
            <p className='fw-bold'>Sub Total</p>
            <p className='fw-bold'>$150</p>
            </div>
            <div className='d-flex justify-content-between'>
            <p className='fw-bold'>Shipping</p>
            <p className='fw-bold'>$10</p>
            </div>
            </div>
            <div className='d-flex justify-content-between pt-3 '>
            <h5 className='fw-bold mb-4'>Total</h5>
            <h5 className='fw-bold'>$160</h5>
            </div>
            </div>
            <div className='bg-white'>

            </div>
            <div className="row pt-5">
            <h5 className='col-md-3 shoppingCartCheckoutTotal text-uppercase text-nowrap'>Payment</h5>
            <div className='col-md-9 shoppingCartCheckoutTotal border'></div>
            </div>
            <div className='bg-white px-3 pt-3 pb-4'>
                <div>
                <input type="radio" className='form-check-input' name="paypal" id="flexRadioDefault1" />
                <label className='ms-2'>Paypal</label>
                </div>
                <div className='mt-3'>
                <input type="radio" className='form-check-input' name="check" id="flexRadioDefault2" />
                <label className='ms-2'>Direct Check</label>
                </div>
                <div className='mt-3'>
                <input type="radio" className='form-check-input' name="Bank" id="flexRadioDefault3" />
                <label className='ms-2'>Bank Transfer</label>
                </div>
                <button className='mt-3 bg-warning w-100 border-0 fw-bold p-3'>Place Order</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Content
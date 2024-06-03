import React, { useState } from 'react'
import CommonNav from './CommonNav'
import { Badge, Card, Dropdown, DropdownButton, Form, Pagination } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { SiWindows } from 'react-icons/si'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import ScrollButton from '../ScrollButton/ScrollButton'

function Content() {

  return (
    <div className='ContentShopMain'>
    <ScrollButton />
    <CommonNav title='Shop' name='ShopList' />
    <div className='ContentDetails row'>
    <div className="col-lg-3">
    <h5 className='ShopContentFilter'>FILTER BY PRICE</h5>
    <div className='ShopContentBorder border-top '></div>
    <div className="bg-white ShopContentPrice mt-3 p-4 mb-4">
                    <form>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox ' aria-label="option 1" checked />
                            <label className="custom-control-label ms-2" for="price-all">All Price</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">1000</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$0 - $100</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">150</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$100 - $200</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">295</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$200 - $300</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">155</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$300 - $400</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">165</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$400 - $500</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">145</Badge>
                        </div>
                    </form>
                </div>
                <h5 className='ShopContentFilter '>FILTER BY COLOR</h5>
                 <div className='ShopContentBorder border-top '></div>
                <div className="bg-white ShopContentPrice  mt-2 p-4 mb-4">
                    <form>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" checked />
                            <label className="custom-control-label ms-2" for="price-all">All Price</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">1000</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$0 - $100</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">150</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$100 - $200</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">295</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$200 - $300</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">155</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$300 - $400</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">165</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$400 - $500</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">145</Badge>
                        </div>
                    </form>
                </div>
                <h5 className='ShopContentFilter'>FILTER BY SIZE</h5>
                 <div className='ShopContentBorder border-top '></div>
                <div className="bg-white ShopContentPrice mt-2 p-4 mb-4">
                    <form>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" checked />
                            <label className="custom-control-label ms-2" for="price-all">All Price</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">1000</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$0 - $100</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">150</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$100 - $200</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">295</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$200 - $300</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">155</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$300 - $400</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">165</Badge>
                        </div>
                        <div className="custom-control custom-checkbox d-flex justify-content-between mb-3">
                            <div className='d-flex'>
                            <Form.Check className='ShopContentCheckBox border border-0' aria-label="option 1" />
                            <label className="custom-control-label ms-2" for="price-all">$400 - $500</label>
                            </div>
                            <Badge className="border bg-transparent text-secondary font-weight-normal">145</Badge>
                        </div>
                    </form>
                </div>
    </div>
    <div className="col-lg-9 shopcontentproducts ps-4 ">
        <div className='d-flex justify-content-between'>
        <div>
            <button className='bg-white border-0'><SiWindows className='mb-1' /></button>
            <button className='bg-white border-0 ms-2'><FontAwesomeIcon icon={faBars} /></button>
        </div>
        <div className='d-flex'>
        <Dropdown>
      <Dropdown.Toggle className='bg-white text-dark border-0 rounded-0' id="dropdown-basic">
        Sorting
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='ms-2'>
      <Dropdown.Toggle className='bg-white text-dark border-0 rounded-0' id="dropdown-basic">
        Showing
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        </div>
        <div className="row pt-4">
        <div className="col-lg-4 mb-4">
        <Card className='rounded-0 border border-0' >
        <img src={product1} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>

        <div className="col-lg-4 mb-4">
        <Card className='rounded-0 border border-0' >
        <img src={product2} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>

        <div className="col-lg-4 mb-4">
        <Card className='rounded-0 border border-0' >
        <img src={product3} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>

        <div className="col-lg-4 mb-4">
        <Card className='rounded-0 border border-0' >
        <img src={product4} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>

        <div className="col-lg-4 mb-4">
        <Card className='rounded-0 border border-0' >
        <img src={product4} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>

        <div className="col-lg-4">
        <Card className='rounded-0 border border-0' >
        <img src={product3} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>

        <div className="col-lg-4">
        <Card className='rounded-0 border border-0' >
        <img src={product2} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>

        <div className="col-lg-4">
        <Card className='rounded-0 border border-0'>
        <img src={product1} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>

        <div className="col-lg-4 mb-4">
        <Card className='rounded-0 border border-0' >
        <img src={product4} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5> <p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
          <div className='d-flex justify-content-center mb-4'>
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <FontAwesomeIcon className='text-warning  mt-1' icon={faStar} />
          <p className='m-0'>(99)</p>
          </div>
        </div>
       </Card>
        </div>
        <div className='d-flex justify-content-center mt-2 contentshopPagination'>
        <Pagination className='contentshopPaginationitem '>
      <Pagination.Prev className='' disabled>Previous</Pagination.Prev>
      <Pagination.Item className=''>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next>Next</Pagination.Next>
      </Pagination>
        </div>
       </div>
    </div>
    </div>
    </div>
  )
}

export default Content
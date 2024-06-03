import React, { useState } from 'react'
import CommonNav from '../Shop/CommonNav'
import './ShopDetails.css'
import ScrollButton from '../ScrollButton/ScrollButton'
import { Card, Carousel, Tab, Tabs } from 'react-bootstrap'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import userReview from '../../assets/userreview.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Slider from "react-slick";

function Content() {

      const [cartValue,setCartValue] = useState(0)
      var settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        // responsive: [
        //   {
        //     breakpoint: 1414,
        //     settings: {
        //       slidesToShow: 3,
             
        //     }
        //   },
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 2,
          
        //     }
        //   },
        //   {
        //     breakpoint: 750,
        //     settings: {
        //       slidesToShow: 1,
         
        //     }
        //   },
       
        // ]
      };

  return (
    <div className='ShopDetailsContent px-5'>
        <ScrollButton />
        <CommonNav title='Shop' name='Shop Detail' />
        <div className="row">
          <div className="col-lg-5">
            <Card className='shopDetailCard border border-0'>
          <Carousel className='shopDetailCarousal'>
      <Carousel.Item>
        <img src={product1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={product2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={product3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={product4} alt="" />
      </Carousel.Item>
    </Carousel>
    </Card>
          </div>
          <div className="col-lg-7 ps-4">
            <Card className='border border-0 rounded-0 px-4 pt-3 h-100'>
            <h2>Product Name Goes Here</h2>
            <div className='d-flex'>
            <div>
            <FontAwesomeIcon icon={faStar} className='text-warning' />
            <FontAwesomeIcon icon={faStar} className='text-warning ms-1' />
            <FontAwesomeIcon icon={faStar} className='text-warning ms-1' />
            <FontAwesomeIcon icon={faStar} className='text-warning ms-1' />
            <FontAwesomeIcon icon={faStar} className='text-warning ms-1' />
            </div>
            <small className='ms-1'>(99 Reviews)</small>
            </div>
            <h3 className='mt-2'>$150.00</h3>
            <p className='mt-3'>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Nonumy</p>
                    <div class="d-flex mb-1">
                        <strong class="text-dark ">Sizes:</strong>
                        <form className='d-flex'>
                            <div class="shopDetailsSizeMain d-flex ps-3">
                                <input type="radio" className="shopDetailsSize form-check-input"  name="size" />
                                <p className="ms-2" >XS</p>
                            </div>
                            <div class="shopDetailsSizeMain d-flex ps-3">
                                <input type="radio" className="shopDetailsSize form-check-input" name="size" />
                                <p className="ms-2" >S</p>
                            </div>
                            <div class="shopDetailsSizeMain d-flex ps-3">
                                <input type="radio" className="shopDetailsSize form-check-input" name="size" />
                                <p className="ms-2">M</p>
                            </div>
                            <div class="shopDetailsSizeMain d-flex ps-3">
                                <input type="radio" className="shopDetailsSize form-check-input" name="size" />
                                <p className="ms-2">L</p>
                            </div>
                            <div class="shopDetailsSizeMain d-flex ps-2">
                                <input type="radio" className="shopDetailsSize form-check-input" name="size" />
                                <p className="ms-2">XL</p>
                            </div>
                        </form>
                    </div> 
                    <div class="d-flex mb-3">
                        <strong class="text-dark">Colors:</strong>
                        <form className='d-flex'>
                            <div class="shopDetailsSizeMain d-flex ps-3">
                                <input type="radio" className="shopDetailsSize form-check-input"  name="size" />
                                <p className="ms-2" >Black</p>
                            </div>
                            <div class="shopDetailsSizeMain d-flex ps-3">
                                <input type="radio" className="shopDetailsSize form-check-input" name="size" />
                                <p className="ms-2" >White</p>
                            </div>
                            <div class="shopDetailsSizeMain d-flex ps-3">
                                <input type="radio" className="shopDetailsSize form-check-input" name="size" />
                                <p className="ms-2">Red</p>
                            </div>
                            <div class="shopDetailsSizeMain d-flex ps-3">
                                <input type="radio" className="shopDetailsSize form-check-input" name="size" />
                                <p className="ms-2">Blue</p>
                            </div>
                            <div class="shopDetailsSizeMain d-flex ps-2">
                                <input type="radio" className="shopDetailsSize form-check-input" name="size" />
                                <p className="ms-2">Green</p>
                            </div>
                        </form>
                    </div> 
                    <div className='d-flex'>
                      <div className='d-flex '>
                        <button className='bg-warning border border-0 px-3 btnOperation' onClick={()=>setCartValue(cartValue-1)}><FontAwesomeIcon  icon={faMinus} /></button>
                        <input type="text" className="form-control btnOperationinput text-normal bg-light border-0 text-center px-3 rounded-0" value={cartValue}></input>
                        <button className='bg-warning border border-0 px-3 btnOperation' onClick={()=>setCartValue(cartValue+1) }><FontAwesomeIcon  icon={faPlus} /></button>
                      </div>
                      <div className='ms-3'>
                        <button className='d-flex bg-warning border-0 px-3'>                      
                          <FontAwesomeIcon className='mt-3' icon={faCartShopping} />
                          <p className='mt-2 ms-2'>Add To Cart</p>
                        </button>
                      </div>
                    </div>
                    <div className='d-flex pt-4'>
                        <p className='text-dark fw-bold'>Share on:</p>
                        <div className='d-flex mt-1'>
                        <BsTwitter className='text-dark ms-3'  />
                        <BsFacebook className='text-dark ms-3' />
                        <BsLinkedin className='text-dark ms-3' />
                        <BsInstagram className='text-dark ms-3' />
                        </div>
                      </div>
            </Card>
          </div>
        </div>
        <div className="row mt-3 pt-5">
          <div className="col-lg-12">
          <Card className='border border-0 rounded-0 px-4 h-100 pt-4 pb-5'>
          <Tabs
      defaultActiveKey="Description"
      className="detailsTab mb-3"
    >
      <Tab eventKey="Description" title="Description" >
        <div className='pt-3'>
          <h4>Product Description</h4>
          <p className='text-secondary mt-3'>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
          <p className='text-secondary'>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
        </div>
      </Tab>
      <Tab eventKey="Information" title="Information">
      <div className='pt-3'>
          <h4>Additional Information</h4>
          <p className='text-secondary mt-3'>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
        <div className="row pt-2">
          <div className="col-md-6">
            <p className='border-bottom pb-2'> Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            <p className='border-bottom pb-2'> Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            <p className='border-bottom pb-2'> Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            <p className='border-bottom pb-2'> Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
          </div>
          <div className="col-md-6">
          <p className='border-bottom pb-2'> Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            <p className='border-bottom pb-2'> Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            <p className='border-bottom pb-2'> Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            <p className='border-bottom pb-2'> Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            </div>
        </div>
        </div>
      </Tab>
      <Tab eventKey="Review" title="Reviews (0)" >
        <div className="row pt-2">
          <div className="col-md-6">
            <h4>1 review for "Product Name"</h4>
            <div className='d-flex pt-3'>
              <img src={userReview} className='img-fluid' style={{width:'45px',height:'47px'}} alt="" />
              <div className='ps-3'>
               <p className='d-flex m-0 '><h6>John Doe</h6><small className='ps-1 '> - 01 Jan 2045</small></p> 
               <div>
            <FontAwesomeIcon icon={faStar} className='text-warning' />
            <FontAwesomeIcon icon={faStar} className='text-warning ms-1' />
            <FontAwesomeIcon icon={faStar} className='text-warning ms-1' />
            <FontAwesomeIcon icon={faStar} className='text-warning ms-1' />
            <FontAwesomeIcon icon={faStar} className='text-warning ms-1' />
            </div>
            <p className='m-0 mt-1'>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
          <h4>Leave a review</h4>
            <div className='text-secondary pt-3'>
            <small>Your email address will not be published. Required fields are marked *</small>
            <div className='d-flex'>
              <p className='mt-3'>Your Rating * :</p>
              <div className='pt-1 ps-2'>
              <FontAwesomeIcon className='mt-3 text-warning' icon={faStar} />
              <FontAwesomeIcon className='mt-3 text-warning ms-1' icon={faStar} />
              <FontAwesomeIcon className='mt-3 text-warning ms-1' icon={faStar} />
              <FontAwesomeIcon className='mt-3 text-warning ms-1' icon={faStar} />
              <FontAwesomeIcon className='mt-3 text-warning ms-1' icon={faStar} />
              </div>
            </div>
            <form action="">
            <div className="form-group">
             <label for="message">Your Review *</label>
             <textarea id="message"  rows="5" className="form-control mt-3 border-secondary shadow-none rounded-0"></textarea>
              </div>
              <div className="form-group mt-3">
              <label for="name mt-3">Your Name *</label>
               <input type="text" className="form-control mt-2 rounded-0" />
             </div>
             <div className="form-group mt-3">
              <label for="name mt-3">Your Email *</label>
               <input type="text" className="form-control mt-2 rounded-0" />
             </div>
             <button className='mt-4 bg-warning border-0 p-2 px-3'>Leave Your Review</button>
            </form>
            </div>
            </div>
        </div>
      </Tab>
    </Tabs>
          </Card>
          </div>
        </div>
        <div className="row mt-5 pt-3 shopDetailsProductsMain">
        <div className="col-lg-3 shopDetailsProducts mb-4">
        <h2 className=''>You MAY ALSO LIKE</h2>
        </div>
        <div className="col-lg-9 shopDetailsProducts">
          <div className='border-bottom Content_Border'></div>
            </div>  
            <Slider className='shopDetailsSlider' {...settings}>
            <div className="col-lg-3 mb-4">
        <Card className='rounded-0 border border-0 position-relative card-content ps-4' >
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

        <div className="col-lg-3 ps-4">
        <Card className='rounded-0 border border-0 position-relative card-content'>
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

        <div className="col-lg-3 ps-4">
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

        <div className="col-lg-3 ps-4">
        <Card className='rounded-0 border border-0'  >
        <img src={product4} className='' alt="" />
        <div className='text-center'>
          <h6 className='mt-4'>Product Name Goes Here</h6>
          <p className='d-flex justify-content-center m-0'><h5>$123.00</h5><p className='fs-6 ms-2 text-decoration-line-through m-0'>$123.00</p></p>
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
        </Slider>
        </div>
    </div>
  )
}

export default Content
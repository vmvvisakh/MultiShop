import React, { useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCartShopping, faCopyright, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import payments from '../../assets/payments.png'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
  // const navigate = useNavigate();

  const handleButtonClick = (buttonId) => {
    // console.log(buttonId);
    setSelectedSocialMedia(buttonId);
    if(buttonId === 1){
      setTimeout(() => {
        window.location.href = 'https://x.com/i/flow/login';
      }, 1000);
    }
    
  };

  return (
    <div className='FooterMain px-5 pt-5 bg-dark'>
    <div className="row pt-5 text-white border-bottom pb-5">
       <div className="col-lg-3">
        <h5>GET IN TOUCH</h5>
        <p className='mt-4'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='text-warning mt-1 me-3' icon={faLocationDot} size='1x' />
        <span className=''>123 Street,New York, USA</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='text-warning mt-1 me-3' icon={faEnvelope} size='1x' />
        <span className=''>info@example.com</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='text-warning mt-1 me-3' icon={faPhone} size='1x' />
        <span className=''>+012 345 67890</span>
        </div>
        </div> 
        <div className="col-lg-3 ps-5">
        <h5>Ouick Shop</h5>
        <div className='d-flex mt-4'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Home</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Our Shop</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Shop Detail</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Shopping Cart</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Checkout</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Contact Us</span>
        </div>
        </div>
        
        <div className="col-lg-3 ps-5">
        <h5>My Account</h5>
        <div className='d-flex mt-4'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Home</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Our Shop</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Shop Detail</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Shopping Cart</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Checkout</span>
        </div>
        <div className='d-flex mt-2'>
        <FontAwesomeIcon className='mt-1 me-1' icon={faAngleRight} />
        <span>Contact Us</span>
        </div>
        </div>
        <div className="col-lg-3">
            <h5 className='mb-4'>NEWSLETTER</h5>
            <span className=''>Duo stet tempor ipsum sit amet magna ipsum tempor est</span>
            <form className='mt-3'>
                            <div class="input-group rounded-0">
                                <input type="text" className="form-control SignupBtn shadow-none border " placeholder="Your Email Address" />
                                <div className="input-group-append">
                                    <button className="btn btn-warning rounded-0">Sign Up</button>
                                </div>
                            </div>
                        </form>
                  <h6 className='mt-4'>Follow US</h6>
                  <div className='d-flex mt-3'>
                  <a onClick={() => handleButtonClick(1)} className={`btn btn-warning rounded-0 me-2 ${selectedSocialMedia === 1 && 'selected'}`}  ><BsTwitter className='text-dark' /></a>
                    <a onClick={() => handleButtonClick(2)} className={`btn btn-warning rounded-0 me-2 ${selectedSocialMedia === 2 && 'selected'}`}><BsFacebook className='text-dark' /></a>
                    <a onClick={() => handleButtonClick(3)} className={`btn btn-warning rounded-0 me-2 ${selectedSocialMedia === 3 && 'selected'}`} ><BsLinkedin className='text-dark' /></a>
                    <a onClick={() => handleButtonClick(4)} className={`btn btn-warning rounded-0 me-2 ${selectedSocialMedia === 4 && 'selected'}`}><BsInstagram className='text-dark' /></a>
                  </div>
        </div>
    </div>
    <div className="row pt-4 ">
    <div className='d-flex justify-content-between'>
    <div>
    <p className='d-flex '><FontAwesomeIcon className='bg-white rounded-circle border border-white mt-1' icon={faCopyright} />
    <span className='text-warning ms-1'>Domain</span><span className='text-white'>.</span>
    <span className='text-white ms-1'>All Rights Reserved. Desinged by  </span>
    <span className='text-warning ms-1'>HTML Codex</span>
    </p>
    </div>
    <div>
      <img src={payments} className='img-fluid' alt="" />
    </div>
    </div>
   
    </div>
    </div>
  )
}

export default Footer
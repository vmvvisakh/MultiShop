import React from 'react'
import ScrollButton from '../ScrollButton/ScrollButton'
import CommonNav from '../Shop/CommonNav'
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

function Content() {
  return (
    <div className='ContentMain px-5 pt-4 pb-5'>
        <ScrollButton />
        <CommonNav name='Contact' />
        <div className="row pt-3">
            <h5 className='col-md-3 h1 text-uppercase text-nowrap'>Contact US</h5>
            <div className='col-md-9 ContactHeading border'></div>
         </div>
         <div className="row pt-4">
          <div className="col-lg-7 bg-white px-3 pt-4 h-75 pb-4">
          <form>
          <input type="text" className='w-100 form-control rounded-0' placeholder='Your Name' />
          <input type="email" className='w-100 form-control rounded-0 mt-3' placeholder='Your Email' />
          <input type="text" className='w-100 form-control rounded-0 mt-3' placeholder='Subject' />
          <textarea style={{height:'150px'}} className='w-100 form-control rounded-0 mt-3' placeholder='Message'></textarea> 
          </form>
          <button className='bg-warning border-0 p-2 px-4 mt-4'>Send Message</button>
          </div>
          <div className="col-lg-5 pb-4 ps-4">
            <div className='bg-white px-3 pt-4 pb-4'>
            <iframe style={{width: "100%", height: "250px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>
          
           <div className="bg-white mt-4 px-3 pt-4 pb-4">
                    <p class="mb-2"><FontAwesomeIcon icon={faLocationDot} className='text-warning' /><span className='ms-3'>123 Street, New York, USA</span> </p>
                    <p class="mb-2"><FontAwesomeIcon icon={faEnvelope} className='text-warning' /><span className='ms-3'>info@example.com</span></p>
                    <p class="mb-2"><FontAwesomeIcon icon={faPhone} className='text-warning' /><span className='ms-3'>+012 345 67890</span></p>
            </div>
            </div>
         </div>
    </div>
  )
}

export default Content
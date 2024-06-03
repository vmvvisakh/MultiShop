import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import contentmainimg from '../../assets/contentmain.jpg'
import contentmainimg2 from '../../assets/contentmain2.jpg'
import offer1 from '../../assets/offer1.jpg'
import offer2 from '../../assets/offer2.jpg'
import cat1 from '../../assets/cat1.jpg'
import cat2 from '../../assets/cat2.jpg'
import cat3 from '../../assets/cat3.jpg'
import cat4 from '../../assets/cat4.jpg'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import vendor1 from '../../assets/vendor1.jpg'
import vendor2 from '../../assets/vendor2.jpg'
import vendor3 from '../../assets/vendor3.jpg'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faCartShopping, faCheck, faHeart, faMagnifyingGlass, faPhoneVolume, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import ScrollButton from '../ScrollButton/ScrollButton';

function Content() {

    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredCard, setIsHoveredCard] = useState('');

    const imageStyle = {
        transition: 'transform 0.5s ease',
        transform: isHovered ? 'rotate(3deg)' : 'rotate(0deg)',
      };
    
  return (
    <div className='ContentMain px-5 pt-4 pb-5'>
        <ScrollButton />
        <div className="row">
            <div className="col-lg-8">
            <Carousel fade>
      <Carousel.Item>
        <img className='img-fluid' src={contentmainimg} text="First slide" />
        <Carousel.Caption className='ContentCarousal'>
          <h1 style={{fontSize: '50px'}}>Men Fashion</h1>
          <p className='mt-3 fs-5 ms-5 fw-bold'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used </p>
          <button className='carousalbtn bg-transparent border border-white text-white p-2 px-4 fw-bold'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid' src={contentmainimg2} text="Second slide" />
        <Carousel.Caption className='ContentCarousal'>
        <h1 style={{fontSize: '50px'}}>Women Fashion</h1>
          <p className='mt-3 fs-5 ms-5 fw-bold'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used </p>
          <button className='carousalbtn bg-transparent border border-white text-white p-2 px-4 fw-bold'>Shop Now</button>
        </Carousel.Caption>
 
      </Carousel.Item>
     
    </Carousel>
            </div>
            <div className="col-lg-4">
            <div className="row ">
                <div className="col-lg-12">
                <div className="position-relative">
            <img src={offer1} alt="offer1" className="img-fluid"  
            style={imageStyle}
            onMouseEnter={() => setIsHovered(true) }
            onMouseLeave={() => setIsHovered(false)}
            />
            <div className="text-overlay">
              <p className='fs-6'>Save 20%</p>
              <h4>Special Offer</h4>
              <button className='offerbtn bg-warning border border-0 text-nowrap p-3 mt-3'>Shop Now</button>
            </div>
             </div>
            </div>
            <div className="col-lg-12 pt-2">
                <div className="position-relative ">
            <img src={offer2} alt="offer2" className="img-fluid" />
            <div className="text-overlay">
              <p className='fs-6'>Save 20%</p>
              <h4>Special Offer</h4>
              <button className='offerbtn bg-warning border border-0 text-nowrap p-3 mt-3'>Shop Now</button>
            </div>
             </div>
            </div>
            </div>
            </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-lg-3">
          <Card className='px-4 py-3 rounded-0 border border-0'>
      <Card.Body className='d-flex'>
      <FontAwesomeIcon className='text-warning me-2' icon={faCheck} size="2x" />
      <h5>Quality Product</h5>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-3">
          <Card className='px-4 py-3 rounded-0 border border-0'>
      <Card.Body className='d-flex'>
      <FontAwesomeIcon icon={faTruckFast} className='text-warning me-2'  size="2x" />
      <h5>Free Shipping</h5>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-3">
          <Card className='px-4 py-3 rounded-0 border border-0'>
      <Card.Body className='d-flex'>
      <FontAwesomeIcon icon={faPhoneVolume} className='text-warning me-2'  size="2x" />
      <h5>14-Day Return</h5>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-3">
          <Card className='px-4 py-3 rounded-0 border border-0'>
      <Card.Body className='d-flex'>
      <FontAwesomeIcon className='text-warning me-2' icon={faCheck} size="2x" />
      <h5>24/7 Support</h5>
      </Card.Body>
    </Card>
          </div>
        </div>
        <div className="row mt-5 pt-3 "> 
        <div className="col-lg-2 mb-4">
        <h2 className=''>Categories</h2>
        </div>
        <div className="col-lg-10 ">
          <div className='border-bottom Content_Border'></div>
            </div>  
        <div className="col-lg-3 mb-4">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat1} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat2} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat3} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat4} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>

        <div className="col-lg-3 mb-4">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat4} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat3} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat2} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat1} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat1} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat2} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat3} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' style={{height:'100px'}}>
        <img src={cat4} style={{width:'100px',height:'100px'}} className='' alt="" />
      <div className='cardcat'>
      <h6>Category Name</h6>
      <p>100 Products</p>
      </div>
    </Card>
        </div>
        </div>
        <div className="row mt-5 pt-5 ">
        <div className="col-lg-4 mb-4">
        <h2 className=''>FEATURED PRODUCTS</h2>
        </div>
        <div className="col-lg-8">
          <div className='border-bottom Content_Border '></div>
            </div>  
        <div className="col-lg-3 mb-4">
        <Card className='rounded-0 border border-0 position-relative card-content' 
        onMouseEnter={() => setIsHoveredCard('camera')}
        onMouseLeave={() => setIsHoveredCard(false)}
        >

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
      
        {isHoveredCard === 'camera' && (
          <div className="overlay">
            <span className="icon"><div className="icon-border"></div><FontAwesomeIcon icon={faCartShopping} /></span>
            <span className="icon ms-3"><div className="icon-border"></div><FontAwesomeIcon icon={faHeart} /></span>
            <span className="icon ms-3"><div className="icon-border"></div><FontAwesomeIcon icon={faArrowsRotate} /></span>
            <span className="icon ms-3"><div className="icon-border"></div><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          </div>
        )}
        </div>
       </Card>
        </div>

        <div className="col-lg-3">
        <Card className='rounded-0 border border-0 position-relative card-content' 
        onMouseEnter={() => setIsHoveredCard('shirt')}
        onMouseLeave={() => setIsHoveredCard(false)}
        >
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
          {isHoveredCard === 'shirt' && (
          <div className="overlay">
            <span className="icon"><div className="icon-border"></div><FontAwesomeIcon icon={faCartShopping} /></span>
            <span className="icon ms-3"><div className="icon-border"></div><FontAwesomeIcon icon={faHeart} /></span>
            <span className="icon ms-3"><div className="icon-border"></div><FontAwesomeIcon icon={faArrowsRotate} /></span>
            <span className="icon ms-3"><div className="icon-border"></div><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          </div>
        )}
        </div>
       </Card>
        </div>

        <div className="col-lg-3">
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

        <div className="col-lg-3">
        <Card className='rounded-0 border border-0' >
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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
        </div>
        <div className='row mt-5 pt-5'>
                <div className="col-lg-6 position-relative">
            <img src={offer1} alt="offer1" className="img-fluid"  
            style={imageStyle}
            onMouseEnter={() => setIsHovered(true) }
            onMouseLeave={() => setIsHovered(false)}
            />
            <div className="text-overlay">
              <p className='fs-6'>Save 20%</p>
              <h4>Special Offer</h4>
              <button className='offerbtn bg-warning border border-0 text-nowrap p-3 mt-3'>Shop Now</button>
            </div>
             </div>
                <div className="col-lg-6 position-relative ">
            <img src={offer2} alt="offer2" className="img-fluid" />
            <div className="text-overlay">
              <p className='fs-6'>Save 20%</p>
              <h4>Special Offer</h4>
              <button className='offerbtn bg-warning border border-0 text-nowrap p-3 mt-3'>Shop Now</button>
            </div>
            </div>
        </div>
        <div className="row mt-5 pt-5 ">
        <div className="col-lg-4 mb-4">
        <h2 className=''>RECENT PRODUCTS</h2>
        </div>
        <div className="col-lg-8">
          <div className='border-bottom Content_Border '></div>
            </div>  

            <div className="col-lg-3 mb-4">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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
        </div>
        <div className="row mt-5 pt-5">
        <div className="col-lg-2">
        <Card className='rounded-0 border border-0 p-5'>
        <img src={vendor1} className='img-fluid' alt="" />
        </Card>
        </div>
        <div className="col-lg-2">
        <Card className='rounded-0 border border-0 p-5'>
        <img src={vendor2} className='img-fluid' alt="" />
        </Card>
        </div>
        <div className="col-lg-2">
        <Card className='rounded-0 border border-0 p-5'>
        <img src={vendor3} className='img-fluid' alt="" />
        </Card>
        </div>
        <div className="col-lg-2">
        <Card className='rounded-0 border border-0 p-5'>
        <img src={vendor1} className='img-fluid' alt="" />
        </Card>
        </div>
        <div className="col-lg-2">
        <Card className='rounded-0 border border-0 p-5'>
        <img src={vendor2} className='img-fluid' alt="" />
        </Card>
        </div>
        <div className="col-lg-2">
        <Card className='rounded-0 border border-0 p-5'>
        <img src={vendor3} className='img-fluid' alt="" />
        </Card>
        </div>
        </div>
    </div>
  )
}

export default Content

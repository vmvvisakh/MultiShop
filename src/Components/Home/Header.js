import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faCartShopping, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FaBars } from "react-icons/fa6"
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


function Header() {
    const [activePage, setActivePage] = useState('');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [showContent, setShowContent] = useState('');
    const [isDropdownOpenPages, setDropdownOpenPages] = useState(false);

    
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setActivePage(path === '/' ? 'home' : path.substring(1));

      }, [location,activePage,showContent]);

    
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };

      const toggleDropdownPages = () => {
        setDropdownOpenPages(!isDropdownOpenPages);
      };

     
    

      // Function to handle click on a link
      const handleLinkClick = (page) => {
        setActivePage(page);
      };

      const linkStyle = (page) => ({
        color: (activePage === page || showContent === page) ? 'yellow' : 'white',
        
      });

      
  return (
    <div>
    <div className='HeaderMain px-5 pt-4 d-flex justify-content-between'>
        <a href="" className="text-decoration-none text-warning">
                    <span className="h1 text-uppercase text-warning bg-dark px-2">Multi</span>
                    <span className="h1 text-uppercase text-dark bg-warning px-2 ml-n1">Shop</span>
                </a>
                <form className=' Header_Form mt-2'>
                    <div className="input-group ">
                        <input type="text" className="form-control rounded-0 border-dark" placeholder="Search for products" />
                        <div className="input-group-append ">
                            <span className="input-group-text bg-transparent text-warning rounded-0 header_Search_Icon border border-info">
                            <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>
                </form>

                <div>
                    <p className='m-0'>Customer Service</p>
                    <h6>+012 345 6789</h6>                                
                </div>
    </div>
    <div className='bg-dark HeaderMainCategory px-5 Header_dark mt-3'>
        <div className="row">
            <div className="col-lg-3 px-4 bg-warning Header_Category pt-4 "  >
            <div className='d-flex justify-content-between' onClick={toggleDropdown}>
            <div className='d-flex'>
            <FaBars className='mt-1' />
            <p className='fw-bold fs-6 ms-2'>Categories</p>
            </div>
            <FontAwesomeIcon icon={faAngleDown} />
            </div>
           
             {isDropdownOpen && (
        <div className='headerDropdownresults'>
            <Dropdown>
            <Dropdown.Toggle className='HeaderDropDownToggle w-100 bg-white text-dark border border-0'>
            <div className='border-bottom px-4 pt-2 d-flex justify-content-between' >
            <p>Dresses</p>
            <FontAwesomeIcon className='mt-1' icon={faAngleRight} />
            </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='DropdownMenuShow border '>
        <Dropdown.Item >Action</Dropdown.Item>
        <Dropdown.Item >Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
            </Dropdown>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Shirts</p>
            </div>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Jeans</p>
            </div>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Swimwear</p>
            </div>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Sleapwear</p>
            </div>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Sportswear</p>
            </div>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Jumpsuits</p>
            </div>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Blazers</p>
            </div>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Jackets</p>
            </div>
            <div className='border-bottom w-100 px-4 pt-2 '>
            <p>Shoes</p>
            </div>
        </div>
      )}
            </div>
            <div className="col-lg-9 pt-4 ps-4 d-flex justify-content-between">
                <div className=''>
                    <Link to="/" style={linkStyle('home')}
                    onMouseEnter={() => setShowContent('home') } 
                    onMouseLeave={() => setShowContent(false)}
            onClick={() => handleLinkClick('home')} className='me-3 text-decoration-none'>Home</Link>
                    <Link 
                    to="/shop"
                    style={linkStyle('shop')}
                    onClick={() => handleLinkClick('shop')}
                    onMouseEnter={() => setShowContent('shop') } 
                    onMouseLeave={() => setShowContent(false)}
                    className='me-3 text-decoration-none'>Shop</Link>

                    <Link to="/shopDetail"  
                    style={linkStyle('shopDetail')}
                    onClick={() => handleLinkClick('shopDetail')}
                    onMouseEnter={() => setShowContent('shopDetail') } 
                    onMouseLeave={() => setShowContent(false)}
                    className='me-3 text-decoration-none cursor-pointer'
                    >Shop Detail</Link>

                    <Link  className='me-3 text-decoration-none cursor-pointer '
                     onClick={toggleDropdownPages} style={linkStyle('pages')} 
                     onMouseEnter={() => setShowContent('pages') } 
                     onMouseLeave={() => setShowContent(false)}>Pages<FontAwesomeIcon icon={faAngleDown} /></Link>

                    {isDropdownOpenPages && (<div className='headerDropdownresultPages border border-0 bg-yellow pt-2'
                    >
                    <p>Shopping Cart </p>
                    <p>Checkout</p>
                </div>
                )}
                  <Link
                  to="/contact"
                  style={linkStyle('contact')}
                  onClick={() => handleLinkClick('contact')}
                  onMouseEnter={() => setShowContent('contact') } 
                  onMouseLeave={() => setShowContent(false)}
                  className='me-3 text-decoration-none cursor-pointer'>Contact</Link>
                </div>
                <div>
                <Link>
                <FontAwesomeIcon className='text-warning me-1' icon={faHeart}  />
                <span className="badge text-white border border-secondary border-white rounded-circle" >0</span>
                </Link>
                <a className='ms-3'>
                <FontAwesomeIcon className='text-warning me-1' icon={faCartShopping} />
                <span className="badge text-white border border-secondary border-white rounded-circle" >0</span>
                </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
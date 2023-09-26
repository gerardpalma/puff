import React from 'react';
import './header.css'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
    return(
        
        <div className="header" >
            <span className="screen-darken"></span>
            <header className="section-header">
            </header>
            <Row className='paddingDefault'>                
                <Col xl={3} sm={3} md={3} lg={3} >
                    <Link to="/">
                        <div className='headertop'>
                            <img src="image/mark.png"></img>
                        </div>
                    </Link>
                </Col>
                <Col xl={3} sm={3} md={3} lg={3} ></Col>
                <Col xl={3} sm={3} md={3} lg={3} ></Col>
                <Col xl={3} sm={3} md={3} lg={3} >
                    <Row className='paddingDefault headermenutop'>
                        <button data-trigger="navbar_main" className="menubtn" type="button">  MENU </button>         
                        <nav id="navbar_main" className="mobile-offcanvas navbar  navbar-dark">
                            <div className="container-fluid menu-container">
                                <div className="offcanvas-header xposition">  
                                    <button className="btn-close btn-white close-button">X</button>
                                </div>
                                <ul className="navbar-nav">
                                    <li className="nav-item active text-position"> <a className="nav-link dropdown" href="/"> HOME </a> </li>
                                    <li className="nav-item text-position"><a className="nav-link dropdown" href="/aboutus"> ABOUT US </a></li>
                                    {/* <li className="nav-item dropdown text-position">
                                        <a className="nav-link  dropdown dropdown-toggle text-position" href="#" data-bs-toggle="dropdown"> SERVICE</a>
                                        <ul className="dropdown-menu dropdown-menu-end text-position dropdownStyle">
                                            <li className='dropdown1 nav-item'> Disposable </li>
                                            <li className='dropdown1'> Premium E-Liquids</li>
                                        </ul>
                                    </li> */}
                                </ul>
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item text-position"><a className="nav-link dropdown" href="/ourproduct"> Products </a></li>
                                    <li className="nav-item text-position"><a className="nav-link dropdown" href="/authentication"> Product Authentication </a></li>
                                    <li className="nav-item dropdown text-position">
                                        <a className="nav-link  dropdown dropdown-toggle text-position" href="#" data-bs-toggle="dropdown"> CONTRACT US</a>
                                        <ul className="dropdown-menu dropdown-menu-end text-position dropdownStyle">
                                        <li><a className="dropdown-item text-position dropdown1 dropdownStyle" href="/contactus"> USA</a></li>
                                        <li><a className="dropdown-item text-position dropdown1 dropdownStyle" href="/contactus"> Canada</a></li>
                                        <li><a className="dropdown-item text-position dropdown1 dropdownStyle" href="/contactus"> International</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown text-position">
                                        <a className="nav-link  dropdown dropdown-toggle text-position" href="/wholesale" data-bs-toggle="dropdown">WHOLESALE</a>
                                        <ul className="dropdown-menu dropdown-menu-end text-position dropdownStyle">
                                        <li><a className="dropdown-item text-position dropdown1 dropdownStyle" href="/wholesale"> USA</a></li>
                                        <li><a className="dropdown-item text-position dropdown1 dropdownStyle" href="/wholesale"> Canada</a></li>
                                        <li><a className="dropdown-item text-position dropdown1 dropdownStyle" href="/wholesale"> International</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        
                    </Row>
                </Col>              
            </Row> 
        </div>
    )
}
export default Header;
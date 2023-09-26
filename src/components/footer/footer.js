import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import './footer.css'

function Footer() {
    return(
        
        <div className='form'>
            {/* <Row className='paddingDefault'></Row>
                <Col xl={6} sm={6} md={6} lg={6} ></Col>
                <Row className='paddingDefault'></Row> */}
            <Row className='paddingDefault'>
                <Col xl={3} sm={3} md={3} lg={3} >
                    <div className='footermarktop'>
                        <img src="image/mark.png"></img>
                    </div>   
                </Col>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <Row className='paddingDefault paddingupdown'>
                        <Col xl={3} sm={3} md={3} lg={3} >
                            <div>
                                <a href="/" className='alink'>HOME</a>
                            </div>                            
                        </Col>
                        <Col xl={3} sm={3} md={3} lg={3} >
                            <div>
                                <a href="/aboutus" className='alink'>ABOUT US</a>
                            </div> 
                        </Col>
                        <Col xl={3} sm={3} md={3} lg={3} >
                            <div>
                                <a href="/contactus" className='alink'>CONTRACT US</a>
                            </div> 
                        </Col>
                        <Col xl={3} sm={3} md={3} lg={3} >
                            <div>
                                <a href="#" className='alink'>MEDIA</a>
                            </div> 
                        </Col>
                    </Row>
                    <Row className='paddingDefault'>
                        <Col xl={1} sm={1} md={1} lg={1} ></Col>
                        <Col xl={10} sm={10} md={10} lg={10} >
                            <div className=''>
                                <p className='footertitle'>If you are a smoker, quitting tobacco is the best thing you can do to improve your health and overall lifestyle. Tobacco contains many harmful chemicals, and replacing them will lessen your exposure to them.</p>
                            </div>
                        </Col>
                        <Col xl={1} sm={1} md={1} lg={1} ></Col>
                    </Row>
                    <Row className='paddingDefault'>
                        <Col xl={1} sm={1} md={1} lg={1} ></Col>
                        <Col xl={10} sm={10} md={10} lg={10} >
                            <div className=''>
                                <p className='footeraddress'>Copyright © 2022 Rufpuf | All Rights Reserved</p>
                            </div>
                        </Col>
                        <Col xl={1} sm={1} md={1} lg={1} ></Col>
                    </Row>
                </Col>               
                <Col xl={3} sm={3} md={3} lg={3} >
                    <Row className='paddingDefault'>
                        <Row className='paddingDefault rowwidth space height'>
                            <div>
                                <p className='address'>ADDRESS</p>
                            </div>
                        </Row>
                        <Row className='paddingDefault rowwidth space'>
                            <div>
                                <p className='address1'>Calgary, Alberta, Canada</p>
                            </div>
                        </Row>
                        <Row className='paddingDefault rowwidth space'>
                            <div>
                                <p className='address'>E-MAIL</p>
                            </div>
                        </Row>
                        <Row className='paddingDefault rowwidth space'>
                            <div>
                                <p className='address1'>rufpuf@rufpuf.com</p>
                            </div>
                        </Row>
                    </Row>
                </Col>                
            </Row>
        </div>
             
    )       
}
export default Footer;
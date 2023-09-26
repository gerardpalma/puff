import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import './homepage.css'
import {Link} from 'react-router-dom'
function Homepage() {
    return(
        
        <div className='form'>
            <Row className='paddingDefault' >
                <Col xl={3} sm={3} md={3} lg={3} >
                    <Row className='paddingDefault'> 
                        <div className='ufpufff2 padding_bottom imagesize'>
                            <img src="image/ufpufff2.png"></img>   
                        </div>       
                    </Row>
                    <Row className='paddingDefault'>
                        <div className='Glow2'>
                            <img src="image/Glow2.png"></img>
                        </div>           
                    </Row>
                </Col>
                <Col xl={6} sm={6} md={6} lg={6} className='smoke'>
                    <div className="together">
                        <img src="image/together.png"></img>
                    </div>
                    <Link to='/ourproduct'> <button className='btnhomepage'>VIEW PRODUCTION</button> </Link>
                </Col>   
                <Col xl={3} sm={3} md={3} lg={3} >
                    <Row className='paddingDefault'>                        
                            <div className='ufpufff1 padding_bottom'>
                                <img src="image/ufpufff1.png"></img>
                            </div>                       
                    </Row>
                    <Row className='paddingDefault'>                       
                            <div className='Glow1'>
                                <img src="image/Glow1.png"></img>
                            </div>
                    </Row>
                </Col>      
            </Row>
            <Row className='paddingDefault '>
                <Col xl={5} sm={5} md={5} lg={5} >
                    <Row className='paddingDefault '>
                        <Col xl={6} sm={6} md={6} lg={6} >
                        </Col>
                        <Col xl={6} sm={6} md={6} lg={6} >
                            <Row className='paddingDefault' style={{"float":"right",}}>
                                <div className='easyposition'>
                                    <div style={{ "width": "27px", "height": "27px", "borderRadius":"100%", "borderColor":"red", "borderStyle":"solid", "float":"right", "margin-left":"10px", "margin-top":"3px"}}>
                                    </div>        
                                    <img src="image/Group 16.png"></img>
                                </div>
                            </Row>
                            <Row className='paddingDefault' style={{"float":"right"}}>
                                <div>
                                    <div style={{ "width": "27px", "height": "27px", "borderRadius":"100%", "borderColor":"green", "borderStyle":"solid", "float":"right", "margin-left":"10px", "margin-top":"3px"}}>
                                    </div>
                                    <img src="image/Group 17.png"></img>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xl={2} sm={2} md={2} lg={2} >
                    <div className='R'>
                        <img src="image/RS.png" style={{"margin-top":"-20px"}}></img>
                    </div>
                </Col>
                <Col xl={5} sm={5} md={5} lg={5} >
                    <Row className='paddingDefault'>
                        <Col xl={6} sm={6} md={6} lg={6} >
                            <Row className='paddingDefault' style={{"float":"left",}}>
                                <div className='easyposition'>
                                    <div style={{ "width": "27px", "height": "27px", "borderRadius":"100%", "borderColor":"yellow", "borderStyle":"solid", "float":"left", "margin-right":"10px", "margin-top":"3px"}}>
                                    </div>        
                                    <img src="image/Group 19.png"></img>
                                </div>
                            </Row>
                            <Row className='paddingDefault' style={{"float":"left"}}>
                                <div style={{"width":"382px"}}>
                                    <div style={{ "width": "27px", "height": "27px", "borderRadius":"100%", "borderColor":"#11f3ff", "borderStyle":"solid", "float":"left", "margin-right":"10px", "margin-top":"3px"}}>
                                    </div>
                                    <img src="image/Group 18.png"></img>
                                </div>
                            </Row>
                        </Col>
                        <Col xl={6} sm={6} md={6} lg={6}>  
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
             
    )       
}
export default Homepage;

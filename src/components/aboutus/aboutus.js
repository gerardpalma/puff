import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import './aboutus.css'

function Aboutus() {
    return(
        
        <div className='form'>
            {/* <Row className='paddingDefault'></Row>
                <Col xl={6} sm={6} md={6} lg={6} ></Col>
                <Row className='paddingDefault'></Row> */}
            <Row className='paddingDefault'>
                <Col xl={3} sm={3} md={3} lg={3} ></Col>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <div className='aboutus'>
                        <img src="image/aboutus.png"></img>
                    </div>
                </Col>               
                <Col xl={3} sm={3} md={3} lg={3} ></Col>                
            </Row>
            <Row className='paddingDefault'>
                <Col xl={3} sm={3} md={3} lg={3} ></Col>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <div className='introduce'>
                        <p>RufPuf is the latest industry leading brand with a simple mission. Be unapologetically great by delivering the most convenient products for the ultimate lifestyle experience. Lead by ambitious industry pioneers with experience spanning over a decade! Our products are exclusively tailored for all vapers.</p>
                    </div>
                </Col>               
                <Col xl={3} sm={3} md={3} lg={3} ></Col>                
            </Row>
            <Row className='paddingDefault'>
                <Col xl={12} sm={12} md={12} lg={12} >
                    <Row className='paddingDefault'>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            
                            <img src="image/ABOUTUS3.png"></img>
                            
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            
                            <img src="image/ABOUTUS2.png"></img>
                            
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            
                                <img src="image/ABOUTUS1.png"></img>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <Row className='paddingDefault'>
                        <div className='center'>
                            <p className='name'>MATTHEW Y.</p>
                        </div>
                    </Row>
                    <Row className='paddingDefault'>
                        <div className=''>
                            <p className='title'>RufPuf is the latest industry leading brand with a simple mission. Be unapologetically great by</p>
                        </div>
                    </Row>
                </Col>
                <Col xl={6} sm={6} md={6} lg={6} className='manchange1'>
                    <div className='position1'>
                        <img src="image/Man1_b.png"></img>  
                    </div>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={6} sm={6} md={6} lg={6} className='manchange2'>
                    <div className='position2'>
                        <img src="image/Man2_b.png"></img>
                    </div>
                </Col>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <Row className='paddingDefault'>
                        <div className='center'>
                            <p className='name'>ZYAD A.</p>
                        </div>
                    </Row>
                    <Row className='paddingDefault'>
                        <div className=''>
                            <p className='title'>RufPuf is the latest industry leading brand with a simple mission. Be unapologetically great by</p>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <Row className='paddingDefault'>
                        <div className='center'>
                            <p className='name'>QUINCY T.</p>
                        </div>
                    </Row>
                    <Row className='paddingDefault'>
                        <div className=''>
                            <p className='title'>RufPuf is the latest industry leading brand with a simple mission. Be unapologetically great by</p>
                        </div>
                    </Row>
                </Col>
                <Col xl={6} sm={6} md={6} lg={6} className='manchange3'>
                    <div className='position3'>
                        <img src="image/Man3_b.png"></img>
                    </div>
                </Col>
            </Row>
        </div>
             
    )       
}
export default Aboutus;
import React, {useState, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap'
import './battery.css'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'

function Battery() {
    
    return(
        
        <div className='form'>
            {/* <Row className='paddingDefault'></Row>
                <Col xl={6} sm={6} md={6} lg={6} ></Col>
                <Row className='paddingDefault'></Row> */}
            <Row className='paddingDefault'>
                <Link to="/ourproduct">
                    <div className=''>                   
                        <p className='backfont'>Back</p>                    
                    </div>
                </Link>
            </Row>
            <Row className='paddingDefault'>
                <div className='itemcenter item_imgbottom'>
                    <img src="image/product/battery.png"></img>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <div className='item_titlewidth'>
                    <p className='item_title'>Klikit Device/Battery</p>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <div className='item_titlewidth'>
                    <p className='item_description'>Battery: 650 mAh, Type C-Rechargeable , Long Lasting Reusable Battery With LightIndicators</p>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <div className='item_titlewidth'>
                    <p className='item_description'>Airflow: Ultra Adjustable Airflow</p>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <div className='item_titlewidth'>
                    <div className='item_position btn_enquireposition'>
                        <button className='btn_enquire'>ENQUIRE NOW</button>
                    </div>
                    <div className='item_position'>
                        <img src="image/element/cam.png"></img>
                    </div>
                    <div className='item_position'>
                        <img src="image/element/f.png"></img>
                    </div>
                    <div className='item_position'>
                        <img src="image/element/bird.png"></img>
                    </div>
                </div>
            </Row>           
            <Row className='paddingDefault'>
                <div className='item_titlewidth'>
                    <p className='item_description'>Connection: Magnetic Connection Between Pod And Battery</p>
                </div>
            </Row>           
            <Row className='paddingDefault'>
                <div className='item_titlewidth'>
                    <p className='item_description'>Portable: Easy to Use, No Button</p>
                </div>
            </Row>            
            <Row className='paddingDefault'>
                <div className='item_titlewidth itemdescripetop'>
                    <p className='item_d'>Description</p>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <div className='item_titlewidth itemdescripebottom'>
                    <p className='item_paragraph'>RufPuf is the latest industry leading brand with a simple mission. Be unapologetically great by delivering the most convenient products for the ultimate lifestyle experience. Lead by ambitious industry pioneers with experience spanning over a decade! Our products are exclusively</p>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={12} sm={12} md={12} lg={12} >
                    <Row className='paddingDefault'>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <div className='item_aboutus1'>
                                <p>ABOUT US</p>
                            </div>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <div className='item_aboutus2'>
                                <p>ABOUT US</p>
                            </div>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <div className='item_aboutus3'>
                                <p>ABOUT US</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='paddingDefault item_imgbottom'>
                <Col xl={3} sm={3} md={3} lg={3} ></Col>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <div className='item_introduce'>
                        <p>RufPuf is the latest industry leading brand with a simple mission. Be unapologetically great by delivering the most convenient products for the ultimate lifestyle experience. Lead by ambitious industry pioneers with experience spanning over a decade! Our products are exclusively tailored for all vapers.</p>
                    </div>
                </Col>               
                <Col xl={3} sm={3} md={3} lg={3} ></Col>                
            </Row>
            <Row className='paddingDefault'>
                <Col xl={12} sm={12} md={12} lg={12} >
                    <Row className='paddingDefault'>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <div className='item_aboutus1'>
                                <p>ABOUT US</p>
                            </div>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <div className='item_aboutus2'>
                                <p>ABOUT US</p>
                            </div>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <div className='item_aboutus3'>
                                <p>ABOUT US</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
             
    )       
}
export default Battery;
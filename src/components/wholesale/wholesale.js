import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import './wholesale.css'

function Wholesale() {
    return(
        
        <div className='form'>
            {/* <Row className='paddingDefault'></Row>
                <Col xl={6} sm={6} md={6} lg={6} ></Col>
                <Row className='paddingDefault'></Row> */}
            <Row className='paddingDefault'>
                <Col xl={3} sm={3} md={3} lg={3} ></Col>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <div className='wholesale'>
                        <img src="image/wholesale.png"></img>
                    </div>
                </Col>               
                <Col xl={3} sm={3} md={3} lg={3} ></Col>                
            </Row>
            <Row className='paddingDefault'>
                <Col xl={2} sm={2} md={2} lg={2} ></Col>
                    <Col xl={8} sm={8} md={8} lg={8} >
                        <Row className='paddingDefault'>                          
                            <div className=''>
                                <input className='inputsmall_left' placeholder='Full name'></input>
                                <input className='inputsmall_right' placeholder='Email'></input>
                            </div>
                        </Row>  
                        <Row className='paddingDefault'>                          
                            <div className=''>
                                <input className='inputsmall_left' placeholder='State'></input>
                                <input className='inputsmall_right' placeholder='Country'></input>
                            </div>
                        </Row> 
                        <Row className='paddingDefault'>
                            <div className=''>
                                <input className='input' placeholder='Subject'></input>
                            </div>
                            <div className=''>
                                <input className='input' placeholder='Phone number'></input>
                            </div>
                            <div className=''>
                                <input className='input' placeholder='Company Name'></input>
                            </div>
                            <div className=''>
                                <input className='input' placeholder='Company Address'></input>
                            </div>
                            <div className=''>
                                <input className='input' placeholder='Website'></input>
                            </div>
                            <div className=''>
                                <input className='input' placeholder='Comments'></input>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div>
                                <p className='howwidth'>How do you sell the products:</p>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='btnsubmitcenter'>
                                <button className='btnsubmit'>SUBMIT</button>
                            </div>
                        </Row>
                    </Col>               
                <Col xl={2} sm={2} md={2} lg={2} ></Col>     
            </Row>           
        </div>
             
    )       
}
export default Wholesale;
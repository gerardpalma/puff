import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import './authentication.css'

function Authentication() {
    return(
        
        <div className='form'>
            {/* <Row className='paddingDefault'></Row>
                <Col xl={6} sm={6} md={6} lg={6} ></Col>
                <Row className='paddingDefault'></Row> */}
            <Row className='paddingDefault'>
                <Col xl={3} sm={3} md={3} lg={3} ></Col>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <div className='authentication'>
                        <img src="image/productauthentication.png"></img>
                    </div>
                </Col>               
                <Col xl={3} sm={3} md={3} lg={3} ></Col>                
            </Row>
            <Row className='paddingDefault'>
                <div className='maskcenter'>
                    <img src="image/maskgroup.png"></img>
                </div> 
            </Row> 
            <Row className='paddingDefault'>                          
                <div className='maskcenter'>
                    <input className='maskinput' placeholder='Place the code here'></input>
                </div>
            </Row>    
            <Row className='paddingDefault'>
                <div className='maskcenter'>
                    <button className='btnmask'>VERIFY</button>
                </div>
            </Row>
        </div>
             
    )       
}
export default Authentication;
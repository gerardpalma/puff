import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import './ourproduct.css'
import {Link} from 'react-router-dom'

function Ourproduct() {
    const [kliKitPodDiv, setkliKitPodDiv] = useState(0)
    const [kliKitPodDiv1, setkliKitPodDiv1] = useState(2)
    const [kliKitPodDiv2, setkliKitPodDiv2] = useState(5) 
    return(
        
        <div className='form'>
            {/* <Row className='paddingDefault'></Row>
                <Col xl={6} sm={6} md={6} lg={6} ></Col>
                <Row className='paddingDefault'></Row> */}
            <Row className='paddingDefault'>
                <Col xl={3} sm={3} md={3} lg={3} ></Col>
                <Col xl={6} sm={6} md={6} lg={6} >
                    <div className='ourproduct'>
                        <img src="image/ourproducts.png"></img>
                    </div>
                </Col>               
                <Col xl={3} sm={3} md={3} lg={3} ></Col>                
            </Row>
            <Row className='paddingDefault'>
                <Col xl={2} sm={2} md={2} lg={2} ></Col> 
                <Col xl={2} sm={2} md={2} lg={2} >
                    <div className='klikit paddingbottom'>
                        <img src="image/klikit.png"></img>
                    </div>
                </Col>
                <Col xl={8} sm={8} md={8} lg={8} >
                    <Row className='paddingDefault'>
                        <Col>
                            <Row className='paddingDefault'>
                                <div className='title_klikit'>
                                    <p className='title_klikit1'>KLIKIT POD</p>
                                </div>
                            </Row>
                            <Row className='paddingDefault'>
                                <div className='letter_klikit oneline'>
                                    <div onClick={()=> setkliKitPodDiv(0)}>
                                        {kliKitPodDiv == 0 &&  <p className='letter_klikit1' >5000 puffs 5%</p>}
                                        {kliKitPodDiv == 1 &&  <p className='letter_klikit2' >5000 puffs 5%</p>}
                                    </div>
                                    <div onClick={()=> setkliKitPodDiv(1)}>
                                        {kliKitPodDiv == 0 && <p className='letter_klikit2'>7000 Puffs</p>}
                                        {kliKitPodDiv == 1 && <p className='letter_klikit1'>7000 Puffs</p>}
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='paddingDefault'>
                        {kliKitPodDiv == 0 && <>
                        <Col xl={4} sm={4} md={4} lg={4}>
                            <Link to="/listview"  state={{ categoryId: "1" }}>
                                <Row className='paddingDefault product'>                                   
                                    <img src="image/klikit pod_b.png"></img>                                   
                                </Row> 
                            </Link>
                        </Col>
                       
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "2" }}>
                                <Row className='paddingDefault product1'>
                                    <img src="image/klikit ful kit_b.png"></img>
                                </Row> 
                            </Link>
                        </Col>
                        
                        </>}
                        {kliKitPodDiv == 1 && <>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "3" }}>
                                <Row className='paddingDefault product3'>
                                    <img src="image/klikit pod1_b.png"></img> 
                                </Row>
                            </Link>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "4" }}>
                                <Row className='paddingDefault product4'>
                                    <img src="image/klikit ful kit1_b.png"></img>
                                </Row>
                            </Link>
                        </Col>
                        </>
                        }
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/battery">
                                <Row className='paddingDefault product2'>
                                    <img src="image/klikit battery_b.png"></img>
                                </Row>
                            </Link> 
                        </Col>                        
                    </Row>
                </Col>                
            </Row>
            <Row className='paddingDefault'>
                <Col xl={1} sm={1} md={1} lg={1} ></Col> 
                <Col xl={3} sm={3} md={3} lg={3} >
                    <div className='klikit paddingbottom'>
                        <img src="image/pink 1.png"></img>
                    </div>
                </Col>
                <Col xl={8} sm={8} md={8} lg={8} >
                    <Row className='paddingDefault'>
                        <Col>
                            <Row className='paddingDefault'>
                                <div className='title_ripper'>
                                    <p className='title_klikit1'>RIPPER</p>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='paddingDefault'>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "5" }}>
                                <Row className='paddingDefault product5'>
                                    <img src="image/pink 2_b.png"></img>
                                </Row>
                            </Link>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "6" }}>
                                <Row className='paddingDefault product6'>
                                    <img src="image/pink 3_b.png"></img>
                                </Row>
                            </Link>
                        </Col>
                    </Row>
                </Col>                
            </Row>
            <Row className='paddingDefault'>
                <Col xl={2} sm={2} md={2} lg={2} ></Col> 
                <Col xl={2} sm={2} md={2} lg={2} >
                    <div className='liquid paddingbottom'>
                        <img src="image/ufpufff2.png"></img>
                    </div>
                </Col>
                <Col xl={8} sm={8} md={8} lg={8} >
                    <Row className='paddingDefault'>
                        <Col>
                            <Row className='paddingDefault'>
                                <div className='title_liquid'>
                                    <p className='title_klikit1'>PREMIUM E-LIQUIDS</p>
                                </div>
                            </Row>
                            <Row className='paddingDefault'>
                                <div className='letter_liquid oneline'>
                                    <div onClick={()=> setkliKitPodDiv1(2)}>
                                        {kliKitPodDiv1 == 2 &&  <p className='letter_klikit1' >Nicotine Salt-30ml</p>}
                                        {kliKitPodDiv1 == 3 &&  <p className='letter_klikit2' >Nicotine Salt-30ml</p>}
                                        {kliKitPodDiv1 == 4 &&  <p className='letter_klikit2' >Nicotine Salt-30ml</p>}
                                    </div>
                                    <div onClick={()=> setkliKitPodDiv1(3)}>
                                        {kliKitPodDiv1 == 2 && <p className='letter_klikit2'>Nicotine Freebase-60ml</p>}
                                        {kliKitPodDiv1 == 3 && <p className='letter_klikit1'>Nicotine Freebase-60ml</p>}
                                        {kliKitPodDiv1 == 4 && <p className='letter_klikit2'>Nicotine Freebase-60ml</p>}
                                    </div>
                                    <div onClick={()=> setkliKitPodDiv1(4)}>
                                        {kliKitPodDiv1 == 2 && <p className='letter_klikit2'>Nicotine Salt-60ml</p>}
                                        {kliKitPodDiv1 == 3 && <p className='letter_klikit2'>Nicotine Salt-60ml</p>}
                                        {kliKitPodDiv1 == 4 && <p className='letter_klikit1'>Nicotine Salt-60ml</p>}
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='paddingDefault'>
                        {kliKitPodDiv1 == 2 && <>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "7" }}>
                                <Row className='paddingDefault product7'>
                                    <img src="image/liquid1_b.png"></img>
                                </Row>
                            </Link> 
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "8" }}>
                                <Row className='paddingDefault product8'>
                                    <img src="image/liquid2_b.png"></img>
                                </Row>
                            </Link>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "9" }}>
                                <Row className='paddingDefault product9'>
                                    <img src="image/liquid3_b.png"></img>
                                </Row>
                            </Link>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "14" }}>
                                <Row className='paddingDefault product22'>
                                    <img src="image/liquidblue_b.png"></img>
                                </Row>
                            </Link>
                        </Col>                       
                        </>}
                        {kliKitPodDiv1 == 3 && <>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "10" }}>
                            <Row className='paddingDefault product10'>
                                <img src="image/liquid4_b.png"></img>
                            </Row>
                            </Link>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "11" }}>
                            <Row className='paddingDefault product11'>
                                <img src="image/liquid5_b.png"></img>
                            </Row>
                            </Link>
                        </Col>                     
                        </>}
                        {kliKitPodDiv1 == 4 && <>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "12" }}>
                                <Row className='paddingDefault product12'>
                                    <img src="image/liquid6_b.png"></img>
                                </Row> 
                            </Link>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "13" }}>
                                <Row className='paddingDefault product13'>
                                    <img src="image/liquid7_b.png"></img>
                                </Row>
                            </Link>
                        </Col>               
                        </>}
                    </Row>
                </Col>                
            </Row>
            <Row className='paddingDefault'>
                <Col xl={1} sm={1} md={1} lg={1} ></Col> 
                <Col xl={3} sm={3} md={3} lg={3} >
                    <Row className='paddingDefault paddingbottom'>
                        <div className='R'>
                            <img src="image/R12.png"></img>
                        </div>
                    </Row>
                </Col>
                <Col xl={8} sm={8} md={8} lg={8} >
                    <Row className='paddingDefault'>
                        <Col>
                            <Row className='paddingDefault'>
                                <div className='title_disposable'>
                                    <p className='title_klikit1'>DISPOSABLE</p>
                                </div>
                            </Row>
                            <Row className='paddingDefault'>
                                <div className='letter_disposable oneline'>
                                    <div onClick={()=> setkliKitPodDiv2(5)}>
                                        {kliKitPodDiv2 == 5 &&  <p className='letter_klikit1'>800</p>}
                                        {kliKitPodDiv2 == 6 &&  <p className='letter_klikit2'>800</p>}
                                        {kliKitPodDiv2 == 7 &&  <p className='letter_klikit2'>800</p>}
                                    </div>
                                    <div onClick={()=> setkliKitPodDiv2(6)}>
                                        {kliKitPodDiv2 == 5 && <p className='letter_klikit2'>4500</p>}
                                        {kliKitPodDiv2 == 6 && <p className='letter_klikit1'>4500</p>}
                                        {kliKitPodDiv2 == 7 && <p className='letter_klikit2'>4500</p>}
                                    </div>
                                    <div onClick={()=> setkliKitPodDiv2(7)}>
                                        {kliKitPodDiv2 == 5 && <p className='letter_klikit2'>7500</p>}
                                        {kliKitPodDiv2 == 6 && <p className='letter_klikit2'>7500</p>}
                                        {kliKitPodDiv2 == 7 && <p className='letter_klikit1'>7500</p>}
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='paddingDefault'>
                        {kliKitPodDiv2 == 5 && <>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "15" }}>
                                <Row className='paddingDefault product14'>                               
                                    <img src="image/R3_b.png"></img>                  
                                </Row>
                            </Link> 
                        </Col>
                        </>}
                        {kliKitPodDiv2 == 6 && <>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "16" }}>
                                <Row className='paddingDefault product15'>                               
                                    <img src="image/R4_b.png"></img>                      
                                </Row>
                            </Link>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "17" }}>
                                <Row className='paddingDefault product16'>                               
                                    <img src="image/R5_b.png"></img>                  
                                </Row>
                            </Link>
                        </Col>
                        </>}
                        {kliKitPodDiv2 == 7 && <>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "18" }}>
                                <Row className='paddingDefault product17'>                               
                                    <img src="image/R6_b.png"></img>                    
                                </Row>
                            </Link> 
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "19" }}>
                                <Row className='paddingDefault product18'>                               
                                    <img src="image/R7_b.png"></img>                
                                </Row>
                            </Link>
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "20" }}>
                                <Row className='paddingDefault product19'>                               
                                    <img src="image/R8_b.png"></img>                 
                                </Row>
                            </Link> 
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "21" }}>
                                <Row className='paddingDefault product20'>                               
                                    <img src="image/R9_b.png"></img>               
                                </Row>
                            </Link> 
                        </Col>
                        <Col xl={4} sm={4} md={4} lg={4} >
                            <Link to="/listview"  state={{ categoryId: "22" }}>
                                <Row className='paddingDefault product21'>                               
                                    <img src="image/R10_b.png"></img>        
                                </Row>
                            </Link>
                        </Col>
                        </>}
                    </Row>
                </Col>                
            </Row>
        </div>
             
    )       
}
export default Ourproduct;
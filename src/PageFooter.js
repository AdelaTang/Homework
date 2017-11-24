import React, { Component } from 'react';
import { Row, Col, Button, span, Input, Checkbox } from 'antd';
import './PageFooter.css'

class PageFooter extends Component {
    render(){
        return(
            <Row className="footerStyle">
                <Row >                    
                    <Col span={4}></Col>  
                    <Col span={17}>
                        <Col span={8}>  
                            <h4 className="footerTitleStyle">Oslon de<span className="color">'</span> Techno</h4>
                            <p>
                                Duis leo risus, vehicula luctus nunc.  Quiue rhoncus, a sodales enim arcu quis turpis. Duis leo risus, condimentum ut posuere ac, vehicula luctus nunc.  Quisque rhoncus, a sodales enim arcu quis turpis.
                            </p>
                            <img src={require("./footer1.JPG")} alt=""/> 
                        </Col>

                        <Col span={8}>
                            <h4 className="footerTitleStyle">Categories</h4>
                            <p>
                                Sed eu leo orci, condimentum gravida metus
                            </p>
                            <p>
                                Etiam at nulla ipsum, in rhoncus purus
                            </p>
                            <p>
                                Fusce vel magna faucibus felis dapibus facilisis
                            </p>
                            <p>
                                Vivamus scelerisque dui in massa
                            </p>   
                            <p>
                                Pellentesque eget adipiscing dui semper
                            </p>                     
                        </Col>

                        <Col span={8}>
                            <h4 className="footerTitleStyle">Get In Touch</h4>
                            <p>
                            #12, Plot No.14, Raj Karmara Street,
                            5th Stage, Koramangala, Madiwala,
                            Bangalore - 493922, Karananana.
                            </p>
                            <p>
                                +94-948-323-5532
                            </p>
                            <p>
                                some.thing@gmail.com
                            </p>                                             
                        </Col>
                    </Col>
                    <Col span={3}></Col>  
                </Row>

                <br />
                <Row>
                    <Col span={10}></Col>
                    <Col span={4}>
                        Copyright 2013 © - Bootstrap Themes
                    </Col>                    
                    <Col span={10}></Col>
                </Row>
            </Row>

        )
    }
}

export default PageFooter
import React, { Component } from 'react';
import { Row, Col, Button, span, Input, Checkbox, Card } from 'antd';
import Img from 'react-image'
import './HomePage.css'
import ProductionCard from './ProductionCard.js'
import {getList} from './action.js'

const proInfos=[{   name: 'HTC One V',
                    description: 'Something about the product goes here. Not More than 2 lines.',
                    price: 360,
                    imgurl: 'XXXX/XXXX'},
                {
                    name: 'Dell One V',
                    description: 'Something about the product goes here. Not More than 2 lines.Something about the product goes here. Not More than 2 lines.',
                    price: 264,
                    imgurl: 'XXXX/XXXX'
                },
                {
                    name: 'Apple One V',
                    description: 'Something about the product goes here. Not More than 2 lines.Something about the product goes here. Not More than 2 lines.',
                    price: 668,
                    imgurl: 'XXXX/XXXX'
                },
                {
                    name: 'Acer One V',
                    description: 'Something about the product goes here. Not More than 2 lines.Something about the product goes here. Not More than 2 lines.',
                    price: 123,
                    imgurl: 'XXXX/XXXX'
                },
                {
                    name: 'Nokia One V',
                    description: 'Something about the product goes here. Not More than 2 lines.Something about the product goes here. Not More than 2 lines.',
                    price: 328,
                    imgurl: 'XXXX/XXXX'
                },
                {
                    name: 'Vivo One V',
                    description: 'Something about the product goes here. Not More than 2 lines.Something about the product goes here. Not More than 2 lines.',
                    price: 129,
                    imgurl: 'XXXX/XXXX'
                },
                {
                    name: 'Oppo One V',
                    description: 'Something about the product goes here. Not More than 2 lines.Something about the product goes here. Not More than 2 lines.',
                    price: 301,
                    imgurl: 'XXXX/XXXX'
                },
                {
                    name: 'Huawei One V',
                    description: 'Something about the product goes here. Not More than 2 lines.Something about the product goes here. Not More than 2 lines.',
                    price: 365,
                    imgurl: 'XXXX/XXXX'
                },
                ]

class HomePage extends Component {
    constructor(props) {
        super(props);  
        
        this.state={
            proInfoList:[]
        }
    }


    componentDidMount(){
        let scope = this;
        getList()
        .then(function (response) {
            scope.setState({proInfoList: response.res})                  
        })
                
    }
    render(){
        const{displaySelectedInfo, selectedProList} = this.props;
        const {proInfoList}=this.state;
        return(
            <div>
                <Row>
                    <img src={require("./advPic1.JPG")} alt="" style={{width: "100%"}}/> 
                </Row> 
                <br />
                <br />
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <h3 className="sectionDescriptionSytle"> 
                            It<span className="color">'</span>s Lorem ipsum <span className="color">dolor</span> sit amet consectetur
                        </h3>
                        <p className="descriptionStyle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique est sit amet diam interdum semper. Vestibulum condimentum ante urna, vel interdum odio accumsan id.
                        </p>                        
                    </Col>
                    <Col span={6}></Col>
                </Row> 

                <Row>
                    <Col span={4}></Col>
                    <Col span={16} className="seperateStyle">                                              
                    </Col>
                    <Col span={4}></Col>
                </Row> 
                <br />
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>                         
                        {
                            proInfoList.map(function(item){
                                return(
                                    <div>
                                        <Col span={5}>
                                            <ProductionCard itemImagePath={"./product1.png"}
                                                        itemName={item.name}                                       
                                                        itemPrice={item.price}
                                                        itemImagePath={item.imgurl}
                                                        displaySelectedInfo={displaySelectedInfo}
                                                        selectedProList={selectedProList}>                            
                                            </ProductionCard>
                                        </Col>
                                        <Col span={1}></Col>                                        
                                    </div>                                    
                                )
                            })
                        }
                        <br />         

                    </Col> 
                    <Col span={4}></Col>
                </Row>

                <br />
                <br />
              
            </div>         
        )
    }
}


export default HomePage;
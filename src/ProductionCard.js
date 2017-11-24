import React, { Component } from 'react';
import { Row, Col, Button, span, Input, Checkbox, Card } from 'antd';
import Img from 'react-image'
import './ProductionCard.css'

class ProductionCard extends Component {
    constructor(props) {
        super(props); 

        this.state={       
            itemPrice: 0,
            itemImagePath:"",
            itemName:"",   
        }

        this.handleAddtoCart = this.handleAddtoCart.bind(this);
    }

    componentDidMount() {
        const {itemImagePath, itemName, itemPrice} = this.props;
        this.setState({itemImagePath, itemName, itemPrice})
    }

    handleAddtoCart(){
        const {displaySelectedInfo, selectedProList} = this.props
        let scope = this;
        let selectProduct = {};
        let tempList = [];
        tempList = selectedProList;      

        

       let indexOfStevie = selectedProList.findIndex(i => i.itemName === scope.state.itemName);
       if(indexOfStevie > -1){
           tempList[indexOfStevie].itemCount = tempList[indexOfStevie].itemCount + 1
       }
       else{
           selectProduct.itemPrice = scope.state.itemPrice;
           selectProduct.itemCount = 1;
           selectProduct.itemName =  scope.state.itemName; 
           tempList.push(selectProduct);
       } 
        
        displaySelectedInfo(tempList);
    }

    render(){
        const {itemImagePath, itemName, itemPrice, displaySelectedInfo, selectedProList} = this.props;
        return(
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} >
                    <div className="custom-image">
                        <img alt="example" width="30%" src={itemImagePath} />
                    </div>                            
                    <div className="custom-card">
                        <h5>{itemName}</h5>                                
                    </div>
                    <p className="custom-card-p">"Something about the product goes here. Not More than 2 lines."</p>
                    <div className="custom-seperator"></div>                         
                    <Row style={{marginBottom:"5px"}}>
                        <Col span={2}></Col>
                        <Col span={10}>
                            <div className="itemPrice">{"$" + itemPrice}</div>
                        </Col>
                        <Col span={10}>
                            <div>
                                <Button className="itemAddtoCar" onClick={this.handleAddtoCart}>Add to Cart</Button>
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row> 
                </Card>
        )
    }
}

export default ProductionCard;
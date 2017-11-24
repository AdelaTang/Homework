import React, { Component } from 'react';
import { Modal,Table, Button,Row,Col } from 'antd';

export default class ProductionDtlModal extends Component {
    constructor(props) {
        super(props); 

        this.state={
            totalPrice: 0
        }

        this.handAddButton = this.handAddButton.bind(this);
        this.handMinusButton = this.handMinusButton.bind(this);
        this.handDeleteButton = this.handDeleteButton.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const {newSelectedProList} = nextProps;
        this.setState({totalPrice: this.calculateTotalPrice(newSelectedProList)});
    }

    calculateTotalPrice(proList){
        let tempTotalPrice = 0;
        proList.map(function(item){
            tempTotalPrice = tempTotalPrice + item.itemPrice * item.itemCount
        })

        return tempTotalPrice
    }

    handAddButton(e){
        const {newSelectedProList} = this.props;
        let itemIndex = e.target.getAttribute("data-index");
        let tempList = newSelectedProList
        tempList[itemIndex].itemCount = tempList[itemIndex].itemCount + 1;        

        this.setState({newSelectedProList: tempList, totalPrice: this.calculateTotalPrice(tempList)});

    }   
    

    handMinusButton(e){
        const {newSelectedProList} = this.props;
        let itemIndex = e.target.getAttribute("data-index");
        let tempList = newSelectedProList
        tempList[itemIndex].itemCount = tempList[itemIndex].itemCount <= 1 ? 1 :tempList[itemIndex].itemCount - 1;

        this.setState({newSelectedProList: tempList, totalPrice: this.calculateTotalPrice(tempList)});
    }

    handDeleteButton(e){
        const {newSelectedProList} = this.props;
        let itemIndex = e.target.getAttribute("data-index");
        let tempList = newSelectedProList
        tempList.splice(itemIndex,1);
        
        this.setState({newSelectedProList: tempList, totalPrice: this.calculateTotalPrice(tempList)});
    }
    
    render(){
        const{visible, onCancel, onOk, newSelectedProList}=this.props;
        const{totalPrice}=this.state;
        return(
            visible ?
            <Modal visible={true}
                   onCancel={onCancel}
                   onOk={onOk}>
                <div>
                    <h3 className="sectionTitleStyle">Shopping Cart</h3>

                    <Row>
                        <Col span={2}/>
                        <Col span={6}><h4>Name</h4></Col>
                        <Col span={2}/>
                        <Col span={1}/>
                        <Col span={4}><h4 style={{textAlign:"center"}}>Quantity</h4></Col>
                        <Col span={1}/>
                        <Col span={2}/>
                        <Col span={6}><h4>Price</h4></Col>
                    </Row>                    
                    {
                        newSelectedProList.map((item, key) =>             
                                <Row>
                                    <Col span={2}/>
                                    <Col span={6}><h4>{item.itemName}</h4></Col>
                                    <Col span={2}/>
                                    <Col span={1}>
                                        <Button data-index={key} style={{padding:"0px", color:"lightblue", borderColor:"#fff", fontSize:"20px", marginTop:"-6px"}}
                                                onClick={this.handAddButton}>+</Button>
                                    </Col>                                    
                                    <Col span={4}><h4 style={{textAlign:"center"}}>{item.itemCount}</h4></Col>  
                                    <Col span={1}>
                                    {
                                        item.itemCount === 1 ? "" :
                                            <Button data-index={key} style={{padding:"0px", color:"lightblue", borderColor:"#fff", fontSize:"20px", marginTop:"-6px"}}
                                                 onClick={this.handMinusButton}>-</Button>
                                    }
                                        
                                    </Col> 

                                    <Col span={2}/>
                                    <Col span={4}><h4>{item.itemPrice * item.itemCount}</h4></Col>
                                    <Col span={1}/>
                                    <Col span={1}>
                                        <Button data-index={key} style={{padding:"0px", color:"lightblue", borderColor:"#fff", fontSize:"20px", marginTop:"-6px"}}
                                                onClick={this.handDeleteButton}>x</Button>
                                    </Col>  
                                </Row>                           
                        )
                    }

                    <Row className="sectionTitleStyle"></Row>
                    <Row>
                        <Col span={12}/>
                        <Col span={4}><h4>Total Price:</h4></Col>
                        <Col span={2}/>
                        <Col span={6}><h4>{totalPrice}</h4></Col>
                    </Row>
                    
                </div>
            </Modal>
            :""
        )
    }
}
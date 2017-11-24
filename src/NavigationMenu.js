import React, { Component } from 'react';
import './NavigationMenu.css'
import { Row, Col, Button } from 'antd';
import ProductionDtlModal from './ProductionDtlModal.js'


class NavigationMenu extends Component {
    constructor(props) {
        super(props);  

        this.state={
            visible: false,
            isLogout: false            
        }  

        this.handleShowDetail = this.handleShowDetail.bind(this);  
        this.handleProDtlmodalCancel = this.handleProDtlmodalCancel.bind(this);
        this.handleProDtlmodalOk=this.handleProDtlmodalOk.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleShowDetail(){
        this.setState({visible: true});        
    }

    handleProDtlmodalCancel(){
        this.setState({visible: false});     
    }

    handleProDtlmodalOk(){
        this.setState({visible: false});     
    }

    handleLogout(){
        const {handleLogout} = this.props;
        handleLogout(true);
    }

    render(){    
        const{summaryInfo, newSelectedProList, isLoginSuccess, isLogout}=this.props;
        const{visible} = this.state;

        return(  
            <div>         
                <Row className="headerStyle">
                    <Col span={4}>
                    </Col>                

                   <Col span="16">
                         <Col span={4}>
                            <div><h1 className="fontSytle" style={{fontSize:"30px"}}>OlsonKart</h1></div>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={8}>
                             <Col span={4}>
                                <lable className="fontSytle" style={{marginTop: "15px"}}>Home</lable>
                            </Col>
                            <Col span={5}>
                                <lable className="fontSytle" style={{marginTop: "15px"}}>Account</lable>
                            </Col>
                            <Col span={5}>
                                <lable className="fontSytle" style={{marginTop: "15px"}}>Pages</lable>
                            </Col>
                            <Col span={6}>
                                <lable className="fontSytle" style={{marginTop: "15px"}}>Computers</lable>
                            </Col>
                            <Col span={4}>
                                <lable className="fontSytle" style={{marginTop: "15px"}}>Contact</lable>
                            </Col>
                        </Col>
                        
                        <Col span={1}></Col>

                        <Col span={10}>
                            <Col span={5}></Col>
                            <Col span={4}>
                                {isLoginSuccess && !isLogout ?
                                    <Button className="buttonSytle" onClick={this.handleLogout}>Log Out</Button> :
                                    <Button className="buttonSytle">Login</Button>  }                              
                            </Col>
                            <Col span={4}>
                                <Button  className="buttonSytle">Signup</Button>
                            </Col>
                            <Col span={11}>
                                <Button  className="buttonSytle" onClick={this.handleShowDetail}>{summaryInfo.count + " Items - $ " + summaryInfo.totalPrice}</Button>
                            </Col>
                        </Col>
                   </Col>

                   <Col span={4}>
                   </Col>
                 
                  
                </Row>
                 <ProductionDtlModal 
                            visible={visible}
                            newSelectedProList={newSelectedProList}
                            onCancel={this.handleProDtlmodalCancel}
                            onOk={this.handleProDtlmodalOk}>                           
                 </ProductionDtlModal>
            </div>
		 
        )
    }
}

export default NavigationMenu;
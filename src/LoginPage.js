import React, { Component } from 'react';
import { Row, Col, Button, span, Input, Checkbox, message } from 'antd';
import './LoginPage.css'
import Img from 'react-image'
import {login} from './action.js'

class LoginPage extends Component {
     constructor(props) {
        super(props);  

        this.state={
            userEmail:"",
            userPwd:"",
            products:[],
            isRememberMeChecked: true
        }  
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this); 
        this.onChangeUserPwd = this.onChangeUserPwd.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handReset = this.handReset.bind(this);
        this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
     }
     
     onChangeUserEmail(e) {
        this.setState({ userEmail: e.target.value });
     }

     onChangeUserPwd(e){
        this.setState({ userPwd: e.target.value });
     }

     handleRememberMeChange(e){
         this.setState({isRememberMeChecked: e.target.checked})
     }

     handleSignIn(){
        const {handleLogin} = this.props;
        const {isRememberMeChecked} = this.state;
        let scope = this;
        if(this.state.userEmail !== "" && this.state.userPwd !== ""){
            let userInfo={};
            userInfo.username = this.state.userEmail;
            userInfo.psd = this.state.userPwd;
            login(userInfo)
                 .then(function (response) {
                     if(response.status === "success"){
                        handleLogin(true, isRememberMeChecked);                                                
                        message.info("Login Susscessfully!")
                     }
                     else{
                        message.info(response.status);
                        return;
                     }                     
                 })
        }
        else{
            message.info("Email and Password can not be empty!");
            return;
        }
     }

     handReset(){
         this.setState({ userEmail: "", userPwd: "" });
     }

     render(){
         const {userEmail, userPwd, isRememberMeChecked} = this.state;
         return(   
             <div>
                 <Row>
                    <Col span={4}></Col>                    
                     <Col span={8}>
                        <h2 className="titleStyle">
                            Login to Access Amazing Benefits 
                            <span className="color">   !!!</span>
                        </h2>   
                        <img src={require("./back1.jpg")} alt="" className="imgStyle"/> 
                        <p>
                            Duis leo risus, vehicula luctus nunc. Quiue rhoncus, a sodales enim arcu quis turpis. Duis leo risus, condimentum ut posuere ac, vehicula luctus nunc. Quisque rhoncus, a sodales enim arcu quis turpis.
                        </p>            
                     </Col>
                     <Col span={1}></Col>
                     <Col span={8} className="loginStyle" style={{backgroundColor:"white"}}>
                        <h3 className="loginLabelStyle">Login</h3>
                        <Row>
                            <Col span={4}>
                                <label className="label">Email</label>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={19}>
                                <Input className="inputStyle" placeholder="Email" onChange={this.onChangeUserEmail} value={userEmail}/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={4}>
                                <label className="label">Password</label>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={19}>
                                <Input type="password" className="inputStyle" placeholder="Password" onChange={this.onChangeUserPwd} value={userPwd}/>
                            </Col>
                        </Row>
                        <br />                                       
                        <Row>
                            <Col span={4}>                                
                            </Col>
                            <Col span={1}></Col>
                            <Col span={19}>
                                <Checkbox checked={isRememberMeChecked} onChange={this.handleRememberMeChange}>Remember me</Checkbox>
                            </Col>
                        </Row>
                        <br />                                                          
                        <Row>
                            <Col span={4}>                                
                            </Col>
                            <Col span={1}></Col>
                            <Col span={19}>
                                <Button className="btnSigninStyle" onClick={this.handleSignIn}>Sign in</Button>
                                <Button className="btnResetStyle" style={{marginLeft:"10px"}} onClick={this.handReset}>Reset</Button>
                            </Col>
                        </Row>
                        <br />           
                     </Col>
                     <Col span={3}>
                     </Col> 
                 </Row>
                 <Row>
                     <Col span={4}></Col>     
                     <Col span={17} className="seperateStyle"></Col>     
                     <Col span={3}></Col>     
                 </Row>
                 <br />
                 <br />

                 <Row>
                     <Col span={4}></Col>     
                     <Col span={17} className="sectionTitleStyle">
                        <icon className="test"></icon>
                        <h4>Whats New</h4>                        
                     </Col>     
                     <Col span={3}></Col>     
                 </Row>
                  
                 <Row>
                     <Col span={4}></Col> 
                     <Col span={17}>
                        <Col span={21}></Col>
                        <Col span={3}>
                            <img src={require("./navigation.JPG")} alt="" style={{width: "100%"}}/> 
                        </Col>
                     </Col> 
                     <Col span={3}></Col> 
                 </Row>
                 <Row>
                     <Col span={4}></Col>     
                     <Col span={17}>
                        <Col span={5}>
                            <img src={require("./phone1.JPG")} alt="" className="imgStyle" style={{width: "100%"}}/> 
                        </Col>

                        <Col span={1}></Col>

                        <Col span={5} style={{ marginLeft: "15px"}}>
                            <img src={require("./phone2.JPG")} alt="" className="imgStyle" style={{width: "100%", marginLeft: "10px"}}/> 
                        </Col>
                        <Col span={1}></Col>

                        <Col span={5} style={{ marginLeft: "15px"}}>
                            <img src={require("./phone3.JPG")} alt="" className="imgStyle" style={{width: "100%", marginLeft: "10px"}}/> 
                        </Col>
                        <Col span={1}></Col>

                        <Col span={5} style={{ marginLeft: "15px"}}>
                            <img src={require("./phone4.JPG")} alt="" className="imgStyle" style={{width: "100%"}}/> 
                        </Col>
                                 
                     </Col>     
                     <Col span={3}></Col>     
                 </Row>

                 <br />
                 
             </div>
          )
     }
}

export default LoginPage;
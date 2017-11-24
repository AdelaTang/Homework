import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationMenu from './NavigationMenu.js'
import LoginPage from './LoginPage.js'
import PageFooter from './PageFooter.js'
import HomePage from './HomePage.js'
import { Row, Col } from 'antd';

class App extends Component {
  constructor(props) {
        super(props);  

        this.state={
            isLoginSuccess: false,
            isRememberMeChecked: true,
            selectedProList: [],
            summaryInfo:{count: 0, totalPrice:0},
            newSelectedProList:[],
            loginSuccessCount: 0,
            isLogout: false
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.displaySelectedInfo = this.displaySelectedInfo.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
  }  

  handleLogin(isUserLoginSuccess, isUserRememberMeChecked){
    this.setState({isLoginSuccess: isUserLoginSuccess, isRememberMeChecked: isUserRememberMeChecked, isLogout: false})   
    if(isUserLoginSuccess){
      this.state.loginSuccessCount = this.state.loginSuccessCount + 1
    } 
    else{
      this.state.loginSuccessCount = 0;
    }
  }

  handleLogout(isUserLogout){
    this.setState({isLogout: isUserLogout})
  }

  displaySelectedInfo(newSelectedProList){
    let scope = this;
    let tempInfo = {count: 0, totalPrice:0};
    console.log(newSelectedProList);
    // let tempArray=[];
    if(newSelectedProList.length > 0){
      newSelectedProList.map(function(item){
          tempInfo.count = tempInfo.count + item.itemCount;
          tempInfo.totalPrice = tempInfo.totalPrice + (item.itemPrice  * item.itemCount);         
      })
     
      scope.setState({summaryInfo: tempInfo})
    }

    
    scope.setState({newSelectedProList})    
  }

  render() {
    const{isLoginSuccess, selectedProList, summaryInfo, newSelectedProList, isRememberMeChecked, loginSuccessCount, isLogout}=this.state;
    return (
      <div style={{backgroundColor:"#FBFBFB"}}>     
        <Row>
          <NavigationMenu summaryInfo={summaryInfo} 
                          newSelectedProList={newSelectedProList} 
                          isLoginSuccess={isLoginSuccess} 
                          handleLogout={this.handleLogout}
                          isLogout={isLogout}>
          </NavigationMenu>
        </Row>  
        {((isLoginSuccess ||  (loginSuccessCount > 0 && isRememberMeChecked)) && !isLogout) ?  
          <Row style={{marginTop:"5px"}}>
            <HomePage selectedProList={selectedProList} displaySelectedInfo={this.displaySelectedInfo}></HomePage>
          </Row>:
          <div>
              <br />     
              <br />   
              <br />   
              <Row>
                <LoginPage handleLogin={this.handleLogin}></LoginPage>
              </Row>
              <Row>
                <PageFooter></PageFooter>
              </Row>
          </div> }    
  
      </div>
    );
  }
}

export default App;

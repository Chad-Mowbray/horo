import React, { Component } from 'react';

export default class Nav extends Component {

  state = {
    showLoginSignup: false
  }

 componentDidMount() {
  setTimeout(() => {
    this.setState({showLoginSignup: !this.state.showLoginSignup})
    
  }, 2800);
}
  


  render() {

    let not_logged_in_yet
    // if(this.state.showLoginSignup) {
      if(this.props.isLoginFormRemoved) {
      not_logged_in_yet = (

        <div className="loginSignup animated fadeInDown slow">
          <ul >
            <li className="loginSignupUlLeft" onClick={() => this.props.display_form('login')}>login</li>
            <li className="loginSignupUlRight" onClick={() => this.props.display_form('signup')}>signup</li>
          </ul>
          </div>
        
      );

    } else {
      not_logged_in_yet = null
    }
    console.log("in Nav, this.props.isLoginFormRemoved", this.props.isLoginFormRemoved)
    
      return ( 

        <div>{this.props.isLoginFormRemoved ? <div>{not_logged_in_yet}</div> : null }</div>
      )
  }
}


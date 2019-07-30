import React, { Component } from 'react'
import SunSquare from './sunsquare.png'
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';
import MainPage from './MainPage';


export default class EnterPage extends Component {


    state = {
        displayed_form: '',
        logged_in: localStorage.getItem('token') != null ? true : false,
        username: '',
        clickedSun: false,
        password: '',
        isLoginFormRemoved: true
      };
     
    
   
  
    componentDidMount() {
     

      if (this.state.logged_in) {
        fetch('http://localhost:8000/core/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(json => {
            this.setState({ username: json.username });
          });
      }
      console.log(localStorage.getItem('token'))

       
    }
  

    handle_login = (e, data) => {
      e.preventDefault();
      console.log("in EnterPage in handle_login", data)

      fetch('http://localhost:8000/token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => {
          if(res.ok) {
              return res.json() 
          } else {
              throw true
          }
      })
        .then(json => {
          localStorage.setItem('token', json.token)
          // console.log("in EnterPage in handle_login in json", json.user)
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.user.username,
            password: data.password
          });
      
        })
        .catch(_error => {
          console.log('unable to log in')
          return false
        })




        // console.log('right above changing isLoginFormRemoved')
        this.setState({isLoginFormRemoved: false})
    };
  

    handle_signup = (e, data) => {
      e.preventDefault();
      fetch('http://localhost:8000/core/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
         
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.username
          });
        });
    };
  

    handle_logout = () => {
      localStorage.removeItem('token');
      this.setState({ logged_in: false, username: '' });
    };
  

    display_form = form => {
      this.setState({
        displayed_form: form
      });
      this.setState({isLoginFormRemoved: true})
    };


    handleClick = (e) => {
        e.preventDefault()
        this.setState({clickedSun: !this.state.clickedSun})
    }

    removeLoginForm = () => {
        this.setState({isLoginFormRemoved: true})
    }

  
    render() {

      // console.log(localStorage.getItem('token'))
      // console.log("in EnterPage", this.state)

      let form;
      switch (this.state.displayed_form) {
        case 'login':
          form = <LoginForm handle_login={this.handle_login} logged_in={this.state.logged_in} />;
          break;
        case 'signup':
          form = <SignupForm handle_signup={this.handle_signup} />;
          break;
        default:
          form = null;
      }
  

      let sunUp;
      let title;
      if(this.state.clickedSun) {
          sunUp = "sunUp animated slideOutUp slower"
          title = 'mainHeaderGone'
      }else {
          sunUp = 'sun'
          title = 'mainHeader'
      }

      console.log(this.state.clickedSun)


    
        return (
            <div className={this.state.clickedSun ? "signuploginpage starrybackground" : null}>

              {/* <h1 className={title}>The stars await</h1> */}

                 <input type="image" src={SunSquare} name="sunsquare" className={sunUp} alt="sunsquare" onClick={this.handleClick} />

                {this.state.clickedSun ?  (<Nav
                    logged_in={this.state.logged_in}
                    display_form={this.display_form}
                    handle_logout={this.handle_logout}
                    isLoginFormRemoved={this.state.isLoginFormRemoved}
                    removeLoginForm={this.removeLoginForm}
                    
                />) : null}

                {this.state.clickedSun ? 
                  <div>
                    {/* <SignupLoginPage form={form} /> */}
                    {form}
                  </div> 
                  : null}
                

                {/* <h3>
                {this.state.logged_in
                    ? `Hello, ${this.state.username}`
                    : 'Please Log In'}
                </h3> */}

                <MainPage logged_in={this.state.logged_in} username={this.state.username} password={this.state.password} handle_logout={this.handle_logout} remove_loginform={this.removeLoginForm}/>
            </div>
        )
    }
}

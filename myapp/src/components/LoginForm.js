import React from 'react';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };
 

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
    // console.log("in LoginForm in handle_change", this.state)
  };

  render() {
    // console.log("in LoginForm state:", this.state)

    // let invalid;
    // if(!this.state.username) {
    //   invalid = <h1>You have not yet provided a valid username/password</h1>
    // }
    
    return (
      <div className="loginFormDiv animated fadeInDown">
        

       <form onSubmit={e => {
                      this.props.handle_login(e, this.state)
                      // console.log("in LoginForm in onSubmit", this.state)
                      }
                    }>
         
       
           <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handle_change}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle_change}
          />
          <input type="submit" />
        </form>

            {/* <div>
              {invalid}
            </div>   */}
         
      </div>
    );
  }
}

export default LoginForm;







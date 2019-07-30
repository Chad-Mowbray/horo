import React, { Component } from 'react';
// import Nav from './components/Nav';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import './App.css';
// import MainPage from './MainPage';
// import Background from './background.png'
import StarFadeUp from './starfadeup.png'
// import SunSquare from './sunsquare.png'
import EnterPage from './EnterPage'

class App extends Component {
 


render() {
    return (
      <div>

        
        <img  className="starfadeup" src={StarFadeUp} alt="starfadeup"></img>

        {/* <input type="image" src={SunSquare} name="sunsquare" className="sun" alt="sunsquare" /> */}
       <EnterPage handleClick={this.handleClick}/>

       

        
      </div>
    );
  }
}

export default App;
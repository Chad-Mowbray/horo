import React, { Component } from 'react'
import Api from './Api'

class MainPage extends Component {

    
    // removeLogin = () => this.props.display_form(null)
    // x = this.props.remove_login 
    

    render() {
            // console.log("in MainPage", this.props)


            let logged_in_nav = (
                <div>
                    
                        <p className="logout" onClick={this.props.handle_logout}>logout</p>
                        
                        {/* <button className="button" onClick={this.saveClicked}>Save</button> */}
                    
                    <Api logged_in={this.props.logged_in} username={this.props.username} password={this.props.password}/>
                </div>
              );





       


        let displayMainPage = null
        if(this.props.logged_in){
            displayMainPage = <div className="starrybackground">{logged_in_nav}</div>
        }

        return(

           

           <div>
               {displayMainPage}
                {/* <Api logged_in={this.props.logged_in} username={this.props.username} password={this.props.password}/> */}
           </div>
        )

    }
}

export default MainPage





 // {this.props.logged_in ?  <div className="starrybackground">{logged_in_nav}</div>}

            // <div className="starrybackground">
                
            //         {this.props.logged_in ? <div>{logged_in_nav}</div> : null}
               
            // {message} 
            // <h1>Hello {this.props.username}</h1> 

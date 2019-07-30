import React, { Component } from 'react'
import axios from 'axios'
import DisplayHoroscope from './DisplayHoroscope'


class Api extends Component {

    state = {
        isApiReturned: false,
        displayHoro: '',
        username: this.props.username,
        password: this.props.password,
        allHoroscopes: null
    }
    


    handleClick = () => {
        console.log('clicked')
        const url = 'https://gentle-atoll-81187.herokuapp.com/'
        axios.get(url).then( response => {this.setState({displayHoro: response.data})
            
    
    }).catch(error => {
        console.log(error)
    })

    }

    handleClickGetAll = () => {
    
        fetch("http://localhost:8000/core/horoscopes/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `JWT ${localStorage.getItem('token')}`
            }
            
            })       
            .then( response => response.json())
            .then( response =>  this.setState({allHoroscopes: response}))
            .catch( error => console.log(error))
    }











    render() {
            // console.log("in API", "state:", this.state)
            // console.log("In API, props:", this.props)
            

        let stuff;

        if(this.props.logged_in) {
            stuff =  (<div className="apiPage"> 
                        <input className="button" type='button' value={`Get ${this.props.username}'s horoscope`} onClick={this.handleClick}></input>
                        <br/>
                        <input className="button" type='button' value={`Get all ${this.props.username}'s horoscopes`} onClick={this.handleClickGetAll}></input>
                       
                    </div>)
        }else {
            stuff = null
        }

        // let displaythehoroscope
        // if(this.state.displayHoro) {
        //     displaythehoroscope = 
        //         <div>
        //             <p>{this.props.username}, Here is your horoscope: </p>
        //             <textarea defaultValue={this.state.displayHoro}></textarea>
        //         </div>
        // }

        return(
            <div>
           {stuff}
          
           <DisplayHoroscope displayHoro={this.state.displayHoro} username={this.props.username} password={this.props.password} allHoroscopes={this.state.allHoroscopes}/> 
            {/* {displaythehoroscope} */}
           </div>
        )
}
}


export default Api
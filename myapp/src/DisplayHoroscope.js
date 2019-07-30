import React, { Component } from 'react'
import GetAllHoroscopes from './GetAllHoroscopes'

export default class DisplayHoroscope extends Component {

    // username = this.props.username

    // requestBody = {
    //     username: this.username,
    //     text: 'this is a post test in state of DisplayHoroscopes'
    // }
  

    saveClicked = () => {
        fetch("http://localhost:8000/core/horoscopes/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "username": this.props.username,
                "text": this.props.displayHoro.join(' ')
            })       //JSON.stringify(this.requestBody.username)
            }).then( resp => resp.json())
            // .then( res => this.props.newMovie(res))
            .catch( error => console.log(error))
    }


    render() {
        // console.log("in DisplayHoroscope", this.state)
        // console.log("in DisplayHoroscope, props:", this.props)
        // console.log('in DisplayHoroscope, requestBody', this.requestBody)



        let displaythehoroscope
        if(this.props.displayHoro) {
            displaythehoroscope = 
                <div className="horoscopeContainer">
                    <p>A message for {this.props.username} from the stars</p>
                    <br/>
                    <hr/>
                    <br/>
                    {/* <textarea defaultValue={this.props.displayHoro}></textarea> */}
                    <p id="horoscopeText" >{this.props.displayHoro}</p>
                    <br/>
                    <hr/>
                    <br/>
                    <button className="button" onClick={this.saveClicked}>Save</button>
                </div>
        }

        return (
            <div>
                {displaythehoroscope}
                <GetAllHoroscopes username={this.props.username} password={this.props.password} allHoroscopes={this.props.allHoroscopes}/>
                
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class GetAllHoroscopes extends Component {



    
    render() {
        let x
        let y
        if(this.props.allHoroscopes !== null) {
            x = this.props.allHoroscopes.filter( horoscope => horoscope.username === this.props.username)
            y = x.map(horoscope => <div><p>{horoscope.text}</p><br></br></div>) 
        }

        console.log('in GetAllHoroscopes', this.props.allHoroscopes)
        console.log(x)
        console.log(y)

        return (
            <div className="horoscopeContainer">
                {/* <h1>A list of all the horoscopes</h1> */}
                {/* <p>{this.props.allHoroscopes}</p> */}
                { y }
            </div>
        )
    }
}

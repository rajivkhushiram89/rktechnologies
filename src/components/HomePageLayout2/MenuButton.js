import React, { Component } from 'react'


export default class MenuButton extends React.Component {

    state = {
        'name': this.props.name,
        'href': this.props.href,
    }

    doSoemthing = () => {
        console.log("Transition to  : " + this.state.name)
    }

    
    render() {
        const name = this.props.name;

        return (  <div className="svg-wrapper">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="320" />
        </svg>
         <div onClick={this.doSoemthing}  className="text">{name}</div>
      </div>)
    }
 //onClick ={this.doSomething}
}
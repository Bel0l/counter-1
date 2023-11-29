import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super ();
        this.state ={
            num: 0
        }
    }
  render() {
    const plus = () =>{
        this.setState({
            num: this.state.num + 1
        })
    }
    return (
      <div>
        <h1>count {this.state.num}</h1>
        <button onClick={plus}>click</button>

      </div>
    )
  }
}

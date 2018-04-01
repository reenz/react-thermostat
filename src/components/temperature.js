import React, { Component } from 'react';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.increaseTemperature = this.increaseTemperature.bind(this);
    this.decreaseTemperature = this.decreaseTemperature.bind(this);
    this.state = {
      temperature: 20,
      minTemperature: 10,
      powerSaving: true,
      powerSavingOnMaxTemperature: 25,
      powerSavingOffMaxTemperature: 35
      }
  }

  increaseTemperature() {
    const newTmp = this.state.temperature + 1;
    this.setState({ temperature: newTmp });
  }

  decreaseTemperature () {
    const newTmp = this.state.temperature - 1;
    this.setState({ temperature: newTmp });
  }

  render() {
    return( 
      <div>
        {this.state.temperature}
        <button id="increase" type="button" onClick={this.increaseTemperature} >Increase</button>
        <button id="decrease" type="button" onClick={this.decreaseTemperature} >Decrease</button>
        
      </div>
    )
  }
}

export default Temperature;



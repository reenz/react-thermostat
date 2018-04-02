import React, {Component} from 'react';

class Temperature extends Component {

  constructor(props) {
    super(props);
    this.increaseTemperature = this
      .increaseTemperature
      .bind(this);
    this.decreaseTemperature = this
      .decreaseTemperature
      .bind(this);
    this.state = {
      msg: '',
      temperature: props.temperature || 20,
      minTemperature: props.minTemperature || 10,
      powerSaving: true,
      powerSavingOnMaxTemperature: 25,
      powerSavingOffMaxTemperature: 35
    }
  }

  increaseTemperature() {
    const newTmp = this.state.temperature + 1;
    this.setState({temperature: newTmp, msg: ''});
  }

  decreaseTemperature() {
    const newTmp = this.state.temperature - 1;
    if (newTmp < this.state.minTemperature) {
      this.setState({msg: "Cannot decrease 10 is the minimum temperature"});
    } else {
      this.setState({temperature: newTmp, msg: ''})
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.temperature}</div> 
        <button id="increase" type="button" onClick={this.increaseTemperature}>Increase</button>
        <button id="decrease" type="button" onClick={this.decreaseTemperature}>Decrease</button>
        <div>{this.state.msg}</div>
      </div>
    )
  }
}

export default Temperature;

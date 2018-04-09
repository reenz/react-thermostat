import React, {Component} from 'react';

class Temperature extends Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: '',
      temperature: props.temperature || 20,
      minTemperature: props.minTemperature || 10,
      powerSaving: true,
      powerSavingOnMaxTemperature: 25,
      powerSavingOffMaxTemperature: 32
    }
  }

  increaseTemperature() {
    const newTmp = this.state.temperature + 1;
    const maxTemperature = this.getMaxTemperature();
    if (newTmp > maxTemperature) {
      this.setState({msg: "This is maximum temperature you can set when power save mode is on."});
    } else {
      this.setState({temperature: newTmp, msg: ''});
    }

  }

  decreaseTemperature() {
    const newTmp = this.state.temperature - 1;
    if (newTmp < this.state.minTemperature) {
      this.setState({msg: "Cannot decrease 10 is the minimum temperature"});
    } else {
      this.setState({temperature: newTmp, msg: ''})
    };
  }

  handleChange(event) {
    this.setState({
      powerSaving: !this.state.powerSaving
    })
  }

  getMaxTemperature() {
    if (this.state.powerSaving) {
      return this.state.temperature = this.state.powerSavingOnMaxTemperature;
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.temperature}</div>
        <button
          id="increase"
          type="button"
          onClick={this
          .increaseTemperature
          .bind(this)}>Increase</button>
        <button
          id="decrease"
          type="button"
          onClick={this
          .decreaseTemperature
          .bind(this)}>Decrease</button>
        <div>{this.state.msg}</div>
        <label>
          On
          <input
            id="powerSavingOn"
            type="checkbox"
            value="On"
            checked={this.state.powerSaving}
            onChange={this
            .handleChange
            .bind(this)}/>
        </label>
      </div>
    )
  }
}

export default Temperature;

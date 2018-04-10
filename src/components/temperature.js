import React, {Component} from 'react';

class Temperature extends Component {

  constructor(props) {
    super(props);
    this.startTemperature = 20;
    this.state = {
      msg: '',
      temperature: props.temperature || this.startTemperature,
      minTemperature: props.minTemperature || 10,
      powerSaving: true,
      powerSavingOnMaxTemperature: 25,
      powerSavingOffMaxTemperature: 32,
      lowEnergyUsageLimit: 18,
      mediumEnergyUsageLimit: 25
    }
  }

  increaseTemperature() {
    const newTmp = this.state.temperature + 1;
    const warningMsg = this.getWarningMsg();
    const maxTemperature = this.getMaxTemperature();
    if (newTmp > maxTemperature) {
      this.setState({msg: warningMsg});
    } else {
      this.setState({temperature: newTmp, msg: ''});
    }
  }

  getWarningMsg() {
    const maxTemperature = this.getMaxTemperature();
    if (maxTemperature === this.state.powerSavingOnMaxTemperature) {
      return "This is maximum temperature you can set when power save mode is on.";
    } else {
      return "This is the maximum temperature you can set.";
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
    if (this.state.temperature <= this.state.powerSavingOnMaxTemperature) {
      this.setState({ powerSaving: !this.state.powerSaving,temperature: this.state.temperature});
    } else {
      this.setState({powerSaving: !this.state.powerSaving, temperature: this.startTemperature, msg: ''
      });
    }
  }

  getMaxTemperature() {
    if (this.state.powerSaving) {
      return this.state.powerSavingOnMaxTemperature
    } else {
      return this.state.powerSavingOffMaxTemperature
    }
  }

  reset() {
    this.setState({temperature: this.startTemperature, msg: ''});
  }

  energyUsage() {

    if (this.state.temperature < this.state.lowEnergyUsageLimit) {
      return this.setState({msg: "Low Usage"})
    }
    if (this.state.temperature < this.state.mediumEnergyUsageLimit) {
      return this.setState({msg: "Medium Usage"})
    }
    if (this.state.temperature >= this.state.mediumEnergyUsageLimit) {
      return this.setState({msg: "High Usage"})
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
        <button
          id="reset"
          type="button"
          onClick={this
          .reset
          .bind(this)}>Reset</button>
        <button
          id="energyUsage"
          type="button"
          onClick={this
          .energyUsage
          .bind(this)}>Check Usage</button>
      </div>
    )
  }
}

export default Temperature;

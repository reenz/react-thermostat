import React, { Component } from 'react';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 20,
      minTemperature: 10,
      powerSaving: true,
      powerSavingOnMaxTemperature: 25,
      powerSavingOffMaxTemperature: 35
      }
  }

  render() {
    return( 
      <div>
        {this.state.temperature}
      </div>
    )
  }
}

export default Temperature;



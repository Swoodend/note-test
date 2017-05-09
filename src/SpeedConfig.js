import React, { Component } from 'react';
import SpeedForm from './SpeedForm';

class SpeedConfig extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentSpeed: 2
    };

    this.reportCurrentSpeed = this.reportCurrentSpeed.bind(this);
  }

  reportCurrentSpeed(speed) {
    this.props.adjustSpeed(speed);
  }
  render(){
    return (
      <div className="speed-config-area">
        <h2>Select Speed</h2>
        <SpeedForm reportSpeed={this.reportCurrentSpeed}/>
      </div>
    )
  }
}

export default SpeedConfig;

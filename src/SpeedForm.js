import React, { Component } from 'react';

class SpeedForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedSpeed: 2,
      isChecked: true
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
    let speed = parseInt(e.target.value);
    if (speed !== 2){
      this.setState({
        selectedSpeed : speed,
        isChecked: false
      }, () => {
        this.props.reportSpeed(speed);
      });
    } else {
      this.setState({
        selectedSpeed: speed,
        isChecked: true
      }, () => {
        this.props.reportSpeed(speed);
      });
    }

  }

  render(){
    return (
      <div className="speed-form-container">
        <form>
          <input onChange={this.handleChange} type="radio" name="speed" value="1"/>1 Sec<br/>
          <input onChange={this.handleChange} type="radio" name="speed" value="2" checked={this.state.isChecked}/>2 Sec<br/>
          <input onChange={this.handleChange} type="radio" name="speed" value="3"/>3 Sec<br/>
          <input onChange={this.handleChange} type="radio" name="speed" value="4"/>4 Sec
        </form>
      </div>
    )
  }
}

export default SpeedForm;

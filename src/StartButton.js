import React, { Component } from 'react';

class StartButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      running : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      running: !this.state.running
    }, () => {
      this.props.updateRunningState(this.state.running);
    });
  }

  render() {
    let startStyle = {
      background: "deepskyblue",
      color: "white",
      width: "60px",
      borderRadius: "5px",
      height: "30px",
      lineHeight: "30px",
      textAlign: "center",
      margin: "0 auto"
    };

    let stopStyle = {
      background: "#ff6666",
      color: "white",
      width: "60px",
      borderRadius: "5px",
      height: "30px",
      lineHeight: "30px",
      textAlign: "center",
      margin: "0 auto"
    };

    let currentButtonStyle = this.state.running ? stopStyle : startStyle;
    let text = this.state.running ? 'Stop' : 'Start'
    return (
      <div className="wide">
        <div onClick={this.handleClick} style={currentButtonStyle}>{text}</div>
      </div>
    );
  }
}

export default StartButton;

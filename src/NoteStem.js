import React, { Component } from 'react';

class NoteStem extends Component {

  getStemDirection(number){
    return number >= 2 ? 'down' : 'up';
  }

  render(){
    let stemStyleDown = {
      height: "30px",
      width: "2px",
      marginTop: "5px",
      background: "black"
    }

    let stemStyleUp = {
      height: "30px",
      width: "2px",
      marginLeft: "9.5px",
      marginTop: "-24px",
      background: "black"
    }

    let stemDirection = this.getStemDirection(this.props.noteState.number);
    let stemStyle = stemDirection === 'up' ? stemStyleUp : stemStyleDown;

    return <div style={stemStyle}></div>
  }
}

export default NoteStem;

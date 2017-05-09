import React, { Component } from 'react';
import Line from './Line.js';
import TitleArea from './TitleArea';
import NoteBody from './NoteBody';
import StartButton from './StartButton';
import CurrentNote from './CurrentNote';
import SpeedConfig from './SpeedConfig';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      running: false,
      currentSpeed: 2
    };
    this.reportRunningState = this.reportRunningState.bind(this);
    this.updateRunningState = this.updateRunningState.bind(this);
    this.updateCurrentNote = this.updateCurrentNote.bind(this);
    this.adjustSpeed = this.adjustSpeed.bind(this);
  }

  reportRunningState(){
    return this.state.running;
  }

  updateRunningState(currentState){
    this.setState({
      running: currentState
    }, () => {
      this.refs.noteBody.checkRunning();
    });
  }

  updateCurrentNote(note){
    this.refs.currentNote.updateNote(note);
  }

  adjustSpeed(speed){
    this.setState({
      currentSpeed: speed
    }, () => {
      this.refs.noteBody.checkRunning();
    });
  }

  render() {
    return (
      <div className="main-container">
        <TitleArea/>
        <Line/>
        <Line/>
        <Line/>
        <Line/>
        <Line/>
        <NoteBody
          ref="noteBody"
          checkIfRunning={this.reportRunningState}
          updateCurrentNote={this.updateCurrentNote}
          currentSpeed={this.state.currentSpeed}
        />
        <StartButton updateRunningState={this.updateRunningState}/>
        <CurrentNote ref="currentNote"/>
        <SpeedConfig adjustSpeed={this.adjustSpeed}/>
      </div>
    );
  }
}

export default App;

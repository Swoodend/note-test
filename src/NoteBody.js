import React, { Component } from 'react';
import NoteStem from './NoteStem'

class NoteBody extends Component {

  constructor(props){
    super(props);
    this.state = {
      position: '',
      note: '',
      tickInterval: false,
      stemInfo : {
        line : null,
        space: null,
        number: null
      },
      noteStyle : {
        display: 'none',
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        borderTopLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        background: "black",
        position: "absolute",
        top: ''
      }
    };

    this.determineLineOrSpace = this.determineLineOrSpace.bind(this);
    this.getNotePosition = this.getNotePosition.bind(this);
  }

  componentDidUpdate(){
    this.props.updateCurrentNote(this.state.note);
  }

  checkRunning(){
    let running = this.props.checkIfRunning();
    for (let i = 0; i < 1000; i++){ //SO HACKY BARF
      clearInterval(i);
    }
    if (running){
      this.getNotePosition(); //fire once to get a note immediately
      let interval = setInterval(this.getNotePosition, 1000 * this.props.currentSpeed);
      this.setState({
        tickInterval: interval
      });
    } else {
      clearInterval(this.state.tickInterval);
      this.setState({
        tickInterval: false
      });
    }
  }

  determineLineOrSpace() {
    return Math.floor(Math.random() * 2);
  }

  getNotePosition() {
    let lineOrSpace = this.determineLineOrSpace();
    let pos;
    if (lineOrSpace === 0){
      pos = [lineOrSpace, Math.floor(Math.random() * 5)];
    } else {
      pos = [lineOrSpace, Math.floor(Math.random() * 4)];
    }

    this.updateNoteState(pos);
  }

  updateNoteState(pos){
    let posHash = {
      0 : {0: ['E', 200], 1: ['G', 185], 2: ['B', 168], 3: ['D', 150], 4: ['F', 133]}, //line positions
      1: {0: ['F', 193], 1: ['A', 176], 2: ['C', 159], 3: ['E', 142]} // space positions
    };

    if (pos[0] === 0){ //[0,4]
      let noteHeight = posHash[pos[0]][pos[1]][1]; //get num
      let note = posHash[pos[0]][pos[1]][0]; //get name
      let newStyle = this.state.noteStyle; //get old style
      newStyle.top = noteHeight;
      newStyle.display = 'block';
      let stemInfo = this.state.stemInfo;
      stemInfo.line = pos[0] === 0;
      stemInfo.space = pos[0] === 1;
      stemInfo.number = pos[1]
      this.setState({
        note,
        stemInfo,
        noteStyle: newStyle,

      });
    } else {
      let noteHeight = posHash[pos[0]][pos[1]][1];
      let note = posHash[pos[0]][pos[1]][0];
      let newStyle = this.state.noteStyle;
      newStyle.top = noteHeight;
      newStyle.display = 'block';
      let stemInfo = this.state.stemInfo;
      stemInfo.line = pos[0] === 0;
      stemInfo.space = pos[0] === 1;
      stemInfo.number = pos[1]
      this.setState({
        note,
        stemInfo,
        noteHeight
      });
    }
  }

  render(){
    return (
      <div id="note" className="note-body" style={this.state.noteStyle}>
        <NoteStem noteState={this.state.stemInfo}/>
      </div>
    );
  }
}

export default NoteBody;

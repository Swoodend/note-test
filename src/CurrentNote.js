import React, { Component } from 'react';

class CurrentNote extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentNote : null
    };
    this.updateNote = this.updateNote.bind(this);
  }

  updateNote(note){
    this.setState({
      currentNote: note
    });
  }

  render(){
    return (
      <div className="current-note-display">
        {this.state.currentNote}
      </div>
    )
  }
}

export default CurrentNote;

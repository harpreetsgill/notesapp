import React, {Component} from 'react';
import '../css/App.css';
import AddNote from './AddNote';
import ViewNotes from './ViewNotes';
import SearchNotes from './SearchNotes';
import {without} from 'lodash';

class App extends Component {

  constructor() {
    super();
    this.state = {
      myNotes: [],
      searchText: '',
      lastIndex: 0
    };
    //
    this.deleteNote = this.deleteNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.searchNotes = this.searchNotes.bind(this);
  }

  addNote(note) {
    let tempNotes = this.state.myNotes;
    note.noteId = this.state.lastIndex;
    tempNotes.unshift(note);
    this.setState({
      myNotes: tempNotes,
      lastIndex: this.state.lastIndex + 1
    });
  }

  // function that deletes a note
  deleteNote(note) {
    // stored all the notes in the array in a temp variable
    let tempNotes = this.state.myNotes;
    // without removed the clicked note from the array and stores it in the tempNotes variable
    tempNotes = without(tempNotes, note);

    // new state of the myNotes variable is set to tempNotes
    this.setState({
      myNotes: tempNotes
    })
  }

  searchNotes(userInput) {
    this.setState({searchText: userInput});
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const nts = result.map(item => {
          item.noteId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myNotes: nts
        });
      });
  }

  render() {

    let filteredNotes = this.state.myNotes;

    filteredNotes = filteredNotes.filter(eachItem => {
      return(
        eachItem['title'].toLowerCase()
          .includes(this.state.searchText.toLowerCase()) ||
        eachItem['note'].toLowerCase()
          .includes(this.state.searchText.toLowerCase())
      );
    });

    return (
      <>
      <div id="container">
        <header>
          <h1 className="app-name">Notes App</h1>
          <SearchNotes
            searchNotes = {this.searchNotes}
          />
        </header>
          
        <main>  
          <div className="notes-container">
            <AddNote
              addNote = {this.addNote}
            />
            <ViewNotes
              notes = {filteredNotes}
              deleteNote = {this.deleteNote}
            />
          </div> 
          <footer>
            <p>&copy; <a href="https://gillharpreet.com">Harpreet Singh Gill</a> 2020</p>
          </footer>
        </main>
      </div>
      </>
    );
  }  
}

export default App;
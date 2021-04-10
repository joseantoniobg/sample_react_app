import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <h1>Hi! I'm a React app!</h1>
        <Person name="Jose" age="27" />
        <Person name="Roni" age="27" >Skills: a lot!</Person>
        <Person name="Eliezer" age="22" />
      </div>
    );
  }
}

export default App;

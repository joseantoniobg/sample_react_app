import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component  {
 state = { persons: [
    { name: 'jose', age: 27 },
    { name: 'roni', age: 28 },
    { name: 'eliezer', age: 22 },
  ],
  showPersons: false,
   texts: [
     {p1: 'wyuewyeuwyuew', p2: 'huahshshshshshshshshshshshs' },
     {p1: 'nossa', p2: 'uke' }
   ]
};

 setUsernameHandler = (event) => {
   this.setState({texts: [
     {p1: event.target.value, p2: 'huahshshshshshshshshshshshs' },
     {p1: 'nossa', p2: 'uke' }
   ]})
 }

  switchNameHandler = (newName) => {
    //DON'T DO THIS! personsState.persons[1].name='Maximilian';
    this.setState({persons: [
                        { name: newName, age: 27 },
                        { name: 'roni', age: 28 },
                        { name: 'eliezer', age: 24 },
                      ],
                    }
                  );
  };

  nameChangeHandler = (event) => {
       this.setState({persons: [
                        { name: 'jose', age: 27 },
                        { name: event.target.value, age: 28 },
                        { name: 'eliezer', age: 24 },
                      ]
                    }
                  );
  }

  showPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render () {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      return (
        <div className="App">
          <h1>Hi! I'm a React app!</h1>
          <button style={style} onClick={this.showPersons}>Switch Names!</button>
          {this.state.showPersons ?
              <div>
                  <Person name={this.state.persons[0].name}
                          age={this.state.persons[0].age} />
                  <Person name={this.state.persons[1].name}
                          age={this.state.persons[1].age}
                          click={this.switchNameHandler.bind(this, 'Ué')}
                          changed = {this.nameChangeHandler}>Skills: a lot!</Person>
                  <Person name={this.state.persons[2].name}
                          age={this.state.persons[2].age} />
              </div> : null}

          <UserInput blur={this.setUsernameHandler} />
          <UserOutput firstParagraph={this.state.texts[0].p1} secondParagraph={this.state.texts[0].p2}></UserOutput>
          <UserOutput firstParagraph={this.state.texts[1].p1} secondParagraph={this.state.texts[1].p2}></UserOutput>
        </div>
      );
    }
  }


export default App;

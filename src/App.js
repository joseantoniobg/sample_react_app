import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {
 const [ personsState, setPersonsState ] = useState({ persons: [
    { name: 'jose', age: 27 },
    { name: 'roni', age: 28 },
    { name: 'eliezer', age: 22 },
  ]
});

 const [ outputState, setOutputState ] = useState({
   texts: [
     {p1: 'wyuewyeuwyuew', p2: 'huahshshshshshshshshshshshs' },
     {p1: 'nossa', p2: 'uke' }
   ]
 })

 const setUsernameHandler = (event) => {
    setOutputState({texts: [
     {p1: event.target.value, p2: 'huahshshshshshshshshshshshs' },
     {p1: 'nossa', p2: 'uke' }
   ]})
 }

  const switchNameHandler = (newName) => {
    //DON'T DO THIS! personsState.persons[1].name='Maximilian';
    setPersonsState({persons: [
                        { name: newName, age: 27 },
                        { name: 'roni', age: 28 },
                        { name: 'eliezer', age: 24 },
                      ]
                    }
                  );
  };

  const nameChangeHandler = (event) => {
       setPersonsState({persons: [
                        { name: 'jose', age: 27 },
                        { name: event.target.value, age: 28 },
                        { name: 'eliezer', age: 24 },
                      ]
                    }
                  );
  }

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
        <button style={style} onClick={() => switchNameHandler('joseeeee')}>Switch Name!</button>
        <Person name={personsState.persons[0].name}
                age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={switchNameHandler.bind(this, 'Ué')}
                changed = {nameChangeHandler}>Skills: a lot!</Person>
        <Person name={personsState.persons[2].name}
                age={personsState.persons[2].age} />
        <UserInput blur={setUsernameHandler} />
        <UserOutput firstParagraph={outputState.texts[0].p1} secondParagraph={outputState.texts[0].p2}></UserOutput>
        <UserOutput firstParagraph={outputState.texts[1].p1} secondParagraph={outputState.texts[1].p2}></UserOutput>
      </div>
    );
  }


export default App;

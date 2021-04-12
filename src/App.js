import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "jose", age: 27 },
      { id: "2", name: "roni", age: 28 },
      { id: "3", name: "eliezer", age: 22 },
    ],
    showPersons: false,
    texts: [
      { p1: "wyuewyeuwyuew", p2: "huahshshshshshshshshshshshs" },
      { p1: "nossa", p2: "uke" },
    ],
  };

  setUsernameHandler = (event) => {
    this.setState({
      texts: [
        { p1: event.target.value, p2: "huahshshshshshshshshshshshs" },
        { p1: "nossa", p2: "uke" },
      ],
    });
  };

  switchNameHandler = (newName) => {
    //DON'T DO THIS! personsState.persons[1].name='Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "roni", age: 28 },
        { name: "eliezer", age: 24 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  showPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "0 0 10px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "white",
      };
      persons = this.state.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.deletePerson(index)}
            changed={(event) => this.nameChangeHandler(event, person.id)}
          />
        );
      });
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi! I'm a React app!</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.showPersons}>
            Switch Names!
          </button>
          {persons}
          <UserInput blur={this.setUsernameHandler} />
          <UserOutput
            firstParagraph={this.state.texts[0].p1}
            secondParagraph={this.state.texts[0].p2}
          ></UserOutput>
          <UserOutput
            firstParagraph={this.state.texts[1].p1}
            secondParagraph={this.state.texts[1].p2}
          ></UserOutput>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

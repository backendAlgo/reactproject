import React, { Component } from 'react';
import Person from './person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ],
    otherState: "some other value"
  }
  
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Maxmillian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My Hobibes: Racing</Person>
      </div>
    );
  } 
}

export default App;

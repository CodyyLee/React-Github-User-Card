import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from "./Components/Cards/Container";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Github User Cards</h1>

        <Container />
      </div>
    );
  }
}

export default App;

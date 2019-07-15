import React, { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'


class App extends Component {
  state = {
    currentscore: 0,
    highscore: 0,
  }
  render() {
    return (
      <>
        <Navbar 
        currentscore={this.state.currentscore}
        highscore={this.state.highscore}>
        </Navbar>
        <Container></Container>
      </>
    );
  }
}

export default App;

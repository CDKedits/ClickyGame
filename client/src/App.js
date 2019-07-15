import React, { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'


class App extends Component {
  state = {
    currentscore: 0,
    highscore: 0,
    haslost: null,
    div1: null,
    div2: null,
    div3: null,
    div4: null,
    div5: null,
    div6: null,
    div7: null,
    div8: null
  }

  // handleLoss = _ => {
  //   if (this.state.currentscore > this.state.highscore) {
  //     this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0 })
  //   } else {
  //     this.setState({ haslost: true, currentscore: 0 })
  //   }
  // }

  handleClick = event => {
    switch (event.target.className) {
      case 'div1 image':
        if (this.state.div1 === true) {
          if (this.state.currentscore > this.state.highscore) {
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0 })
          } else {
            this.setState({ haslost: true, currentscore: 0 })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div1: true })
        }
        break
      case 'div2 image':
        this.setState({ div2: true })
        console.log(this.state.div2)
        break
      case 'div3 image':
        this.setState({ div3: true })
        console.log(this.state.div3)
        break
      case 'div4 image':
        this.setState({ div4: true })
        console.log(this.state.div4)
        break
      case 'div5 image':
        this.setState({ div5: true })
        console.log(this.state.div5)
        break
      case 'div6 image':
        this.setState({ div6: true })
        console.log(this.state.div6)
        break
      case 'div7 image':
        this.setState({ div7: true })
        console.log(this.state.div7)
        break
      case 'div8 image':
        this.setState({ div8: true })
        console.log(this.state.div8)
        break
      default: console.log('uh oh')
        break
    }
  }

  render() {
    return (
      <>
        <Navbar
          currentscore={this.state.currentscore}
          highscore={this.state.highscore}
          haslost={this.state.haslost}>
        </Navbar>
        <Container handleClick={this.handleClick}></Container>
      </>
    );
  }
}

export default App;

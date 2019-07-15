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

  handleClick = event => {
    switch (event.target.className) {
      case 'div1 image':
        if (this.state.div1 === true) {
          if (this.state.currentscore > this.state.highscore) {
            alert('You lost!')
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          } else {
            alert('You lost!')
            this.setState({ haslost: true, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div1: true })
        }
        break
      case 'div2 image':
        if (this.state.div2 === true) {
          if (this.state.currentscore > this.state.highscore) {
            alert('You lost!')
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          } else {
            alert('You lost!')
            this.setState({ haslost: true, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div2: true })
        }
        break
      case 'div3 image':
        if (this.state.div3 === true) {
          if (this.state.currentscore > this.state.highscore) {
            alert('You lost!')
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          } else {
            alert('You lost!')
            this.setState({ haslost: true, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div3: true })
        }
        break
      case 'div4 image':
        if (this.state.div4 === true) {
          if (this.state.currentscore > this.state.highscore) {
            alert('You lost!')
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          } else {
            alert('You lost!')
            this.setState({ haslost: true, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div4: true })
        }
        break
      case 'div5 image':
        if (this.state.div5 === true) {
          if (this.state.currentscore > this.state.highscore) {
            alert('You lost!')
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          } else {
            alert('You lost!')
            this.setState({ haslost: true, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div5: true })
        }
        break
      case 'div6 image':
        if (this.state.div6 === true) {
          if (this.state.currentscore > this.state.highscore) {
            alert('You lost!')
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          } else {
            alert('You lost!')
            this.setState({ haslost: true, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div6: true })
        }
        break
      case 'div7 image':
        if (this.state.div7 === true) {
          if (this.state.currentscore > this.state.highscore) {
            alert('You lost!')
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          } else {
            alert('You lost!')
            this.setState({ haslost: true, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div7: true })
        }
        break
      case 'div8 image':
        if (this.state.div8 === true) {
          if (this.state.currentscore > this.state.highscore) {
            alert('You lost!')
            this.setState({ haslost: true, highscore: this.state.currentscore, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          } else {
            alert('You lost!')
            this.setState({ haslost: true, currentscore: 0, div1: null, div2: null, div3: null, div4: null, div5: null, div6: null, div7: null, div8: null })
          }
        } else {
          this.setState({ currentscore: this.state.currentscore + 1, div8: true })
        }
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

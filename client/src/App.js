import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  // state: {
  //   score: ,

  // }
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Welcome to Taylor Swift's Clicky Game!
            </Typography>
            <Typography variant="h6">
              Click an album cover to begin
            </Typography>
            <Typography variant="h6">
              Current Score: 0 | Top Score: 0
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default App;

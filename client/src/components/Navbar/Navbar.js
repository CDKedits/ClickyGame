import React from 'react';
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = props => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs="4" style={{ textAlign: "center" }}>
              <Typography variant="h6">
                Welcome to Taylor Swift's Clicky Game
                </Typography>
            </Grid>
            <Grid item xs="4" style={{ textAlign: "center" }}>
              <Typography variant="h6">
                Click on an album cover to start!
              </Typography>
            </Grid>
            <Grid item xs="4" style={{ textAlign: "center" }}>
              <Typography variant="h6">
                Current Score: {props.currentscore ? `${props.currentscore}` : `${0}`} | High Score: {props.highscore ? `${props.highscore}` : `${0}`}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar
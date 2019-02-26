import React, { Component } from "react";
import Home from "./components/home/home";
import { Router } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import Menu from "./components/menu/menu";

class App extends Component {
  state = {
    loggedIn: true
  };

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Menu loggedIn={this.state.loggedIn} />
        </Grid>
        <Router>
          <Home path="/" />
        </Router>
      </Grid>
    );
  }
}

export default App;

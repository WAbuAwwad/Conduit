import React, { Component } from "react";
import Home from "./components/home/home";
import { Router, Redirect } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import Menu from "./components/menu/menu";
import SignIn from "./components/signin/signin";

class App extends Component {
  state = {
    isLoggedIn: false,
    username: ""
  };

  loggedIn = (isLoggedIn: boolean, username?: string) => {
    if (isLoggedIn) this.setState({ isLoggedIn, username });
    else this.setState({ isLoggedIn });
  };

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Menu
            loggedIn={this.state.isLoggedIn}
            username={this.state.username}
          />
        </Grid>
        <Grid item xs={12}>
          <Router>
            {this.state.isLoggedIn ? (
              <Redirect noThrow from="sign-in" to="/home" />
            ) : null}
            <Home path="/home" />
            <SignIn path="sign-in" loggedIn={this.loggedIn} />
          </Router>
        </Grid>
      </Grid>
    );
  }
}

export default App;

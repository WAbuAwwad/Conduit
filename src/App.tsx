import React, { Component } from "react";
import Home from "./components/home/home";
import { Router, navigate } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import Menu from "./components/menu/menu";
import SignIn from "./components/signin/signin";

class App extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    currentPath: ""
  };

  handleLogin = (isLoggedIn: boolean, username?: string) => {
    if (isLoggedIn) {
      this.setState({ isLoggedIn, username });
      navigate("/");
    }
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
            <Home path="/" />
            <SignIn path="sign-in" onLogin={this.handleLogin} />
          </Router>
        </Grid>
      </Grid>
    );
  }
}

export default App;

import React, { Component } from "react";
import Home from "./components/home/home";
import { Router } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import Menu from "./components/menu/menu";

class App extends Component {
  public state = {
    loggedIn: false,
    path: "/"
  };
  public changePath = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target instanceof HTMLElement) {
      console.log(event.target.innerText.toLowerCase());
      this.setState({ path: event.target.innerText.toLowerCase() });
    }
  };

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Menu loggedIn={this.state.loggedIn} changePath={this.changePath} />
        </Grid>
        <Router>
          <Home path="/" />
          {this.state.path == "home" ? (
            <Home path="/" />
          ) : this.state.path == "sign in" ? null : this.state.path == //sign in
            "sign up" ? null : this.state.path == "new article" ? null : this //sign up //new article
              .state.path == "settings" ? null : null //settings //profile
          }
        </Router>
      </Grid>
    );
  }
}

export default App;

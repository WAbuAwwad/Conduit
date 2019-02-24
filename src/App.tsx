import React, { Component } from "react";
import Home from "./components/home/home";
import { Router } from "@reach/router";

class App extends Component {
  public state = {
    email: "",
    password: "",
    loggedIn: false,
    username: ""
  };

  render() {
    return (
      <Router>
        <Home path="/" />
      </Router>
    );
  }
}

export default App;

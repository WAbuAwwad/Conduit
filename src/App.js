import React, { Component } from "react";
import Home from "./components/home";
import SignIn from "./components/signIn";
import { Router } from "@reach/router";
class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <SignIn path="/sign-in" />
      </Router>
    );
  }
}

export default App;

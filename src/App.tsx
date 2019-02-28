import React, { Component } from "react";
import Home from "./components/home/home";
import { Router } from "@reach/router";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import NewArticle from "./components/new article/newArticle";
import Settings from "./components/settings/settings";
import { RouteComponentProps } from "@reach/router";

class App extends Component<RouteComponentProps> {
  render() {
    return (
      <Router>
        <Home path="/" />
        <SignIn path="sign-in" />
        <SignUp path="sign-up" />
        <NewArticle path="new-article" />
        <Settings path="settings" />
      </Router>
    );
  }
}

export default App;

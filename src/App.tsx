import React, { Component } from "react";
import Home from "./components/home/home";
import SignIn from "./components/signIn/SignIn";
import { Router } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import Menu from "./components/menu/menu";
import SignUp from "./components/signUp/signUp";
class App extends Component {
  public state = {
    email: "",
    password: "",
    loggedIn: false,
    username: ""
  };
  public changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ email: event.target.value });
    }
  };
  public changeUsername = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ username: event.target.value });
    }
  };
  public changePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ password: event.target.value });
    }
  };
  public signIn = (event: React.FormEvent) => {
    var user = {
      email: this.state.email,
      password: this.state.password
    };

    var data = new FormData();
    data.append("json", JSON.stringify(user));

    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      body: data
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        if (data == null)
          this.setState({
            loggedIn: true
          });
        else
          this.setState({
            loggedIn: false
          });
      });
    event.preventDefault();
  };
  public signUp = (event: React.FormEvent) => {
    var user = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    };

    var data = new FormData();
    data.append("json", JSON.stringify(user));

    fetch("https://conduit.productionready.io/api/users/", {
      method: "POST",
      body: data
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        // if (data == null)
        //   this.setState({
        //     loggedIn: true
        //   });
        // else
        //   this.setState({
        //     loggedIn: false
        //   });
      });
    event.preventDefault();
  };

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Menu loggedIn={this.state.loggedIn} />
        </Grid>
        <Router>
          <SignIn
            path="/sign-in"
            email={this.state.email}
            password={this.state.password}
            changeEmail={this.changeEmail}
            changePassword={this.changePassword}
            signIn={this.signIn}
          />
          <SignUp
            path="/sign-up"
            username={this.state.username}
            email={this.state.email}
            password={this.state.password}
            changeEmail={this.changeEmail}
            changePassword={this.changePassword}
            changeUsername={this.changeUsername}
            signUp={this.signUp}
          />
          <Home path="/" />
        </Router>
      </Grid>
    );
  }
}

export default App;

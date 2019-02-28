import * as React from "react";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, RouteComponentProps } from "@reach/router";
import "./style.css";
import Grid from "@material-ui/core/Grid";

interface Props {
  onLogin: (isLoggedIn: boolean, username?: string, token?: string) => void;
}
const checkSignup = (username: string, email: string, password: string) => {
  let data = {
    user: {
      email: email,
      password: password,
      username: username
    }
  };

  return fetch("https://conduit.productionready.io/api/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }).then(function(res) {
    return res.json();
  });
};
class SignUp extends Component<Props & RouteComponentProps> {
  state = {
    username: "",
    email: "",
    password: "",
    usernameError: "",
    emailError: "",
    passwordError: ""
  };

  changeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ username: event.target.value });
  };

  changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: event.target.value });
  };
  changePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ password: event.target.value });
  };
  signUp = (event: React.FormEvent) => {
    checkSignup(
      this.state.username,
      this.state.email,
      this.state.password
    ).then(data => {
      if (data.errors == null) {
        this.setState({
          passwordError: "",
          usernameError: "",
          emailError: ""
        });
        this.props.onLogin(true, data.user.username, data.user.token);
      } else {
        this.props.onLogin(false);
        if (data.errors.username)
          this.setState({
            usernameError: "username " + data.errors.username
          });
        if (data.errors.email)
          this.setState({
            emailError: "email " + data.errors.email
          });
        if (data.errors.password)
          this.setState({
            passwordError: "password " + data.errors.password
          });
      }
    });
    event.preventDefault();
  };

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            color="primary"
            className="txt"
          >
            Sign Up
          </Typography>
          <Link to="/sign-in">
            <Typography gutterBottom className="txt">
              have an account?
            </Typography>
          </Link>
          <Typography gutterBottom variant="h6" color="error">
            {this.state.usernameError} <br />
            {this.state.emailError}
            <br />
            {this.state.passwordError}
          </Typography>

          <form onSubmit={this.signUp}>
            <TextField
              placeholder="username"
              fullWidth
              margin="normal"
              variant="filled"
              required
              type="text"
              onChange={this.changeUsername}
              value={this.state.username}
            />
            <TextField
              placeholder="email"
              fullWidth
              margin="normal"
              variant="filled"
              required
              type="email"
              onChange={this.changeEmail}
              value={this.state.email}
            />
            <TextField
              placeholder="password"
              fullWidth
              margin="normal"
              variant="filled"
              required
              type="password"
              onChange={this.changePassword}
              value={this.state.password}
            />
            <Button
              type="submit"
              variant="contained"
              size="medium"
              color="primary"
              style={{ marginLeft: "45%" }}
            >
              sign Up
            </Button>
          </form>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    );
  }
}

export default SignUp;

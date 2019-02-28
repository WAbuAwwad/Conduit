import * as React from "react";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, RouteComponentProps, navigate } from "@reach/router";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import Menu from "../menu/menu";

const login = (email: string, password: string) => {
  let data = {
    user: {
      email: email,
      password: password
    }
  };

  return fetch("https://conduit.productionready.io/api/users/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=utf-8" }
  }).then(function(res) {
    return res.json();
  });
};
class SignIn extends Component<RouteComponentProps> {
  state = {
    email: "",
    password: "",
    fail: false
  };

  changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: event.target.value });
  };
  changePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ password: event.target.value });
  };

  signIn = (event: React.FormEvent) => {
    login(this.state.email, this.state.password).then(data => {
      if (data.errors == null) {
        localStorage.setItem("token", data.user.token);
      } else {
        this.setState({ fail: true });
      }
    });
    event.preventDefault();
    navigate("/");
  };

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Menu />
        </Grid>
        <Grid item xs={12} />
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
              Sign In
            </Typography>
            <Link to="/sign-up">
              <Typography gutterBottom className="txt">
                need an account?
              </Typography>
            </Link>
            {this.state.fail ? (
              <Typography gutterBottom variant="h6" color="error">
                Invalid email or password
              </Typography>
            ) : null}

            <form onSubmit={this.signIn}>
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
                sign In
              </Button>
            </form>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
    );
  }
}

export default SignIn;

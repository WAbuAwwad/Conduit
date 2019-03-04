import * as React from "react";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { RouteComponentProps } from "@reach/router";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import Typography from "@material-ui/core/Typography";

const changeSettings = (
  email: string,
  bio: string,
  image: string,
  username: string,
  password: string
) => {
  let data = {
    user: {
      email: email,
      bio: bio,
      image: image,
      username: username,
      password: password
    }
  };
  fetch("https://conduit.productionready.io/api/user", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Token " + localStorage.getItem("token")
    },
    credentials: "include"
  });
};

class Settings extends Component<RouteComponentProps> {
  state = {
    URL: "",
    username: "",
    bio: "",
    email: "",
    password: ""
  };

  changeURL = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ URL: event.target.value });
  };
  changeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ username: event.target.value });
  };
  changeBio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ bio: event.target.value });
  };
  changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: event.target.value });
  };
  changePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ password: event.target.value });
  };

  onLogout = (event: React.MouseEvent<HTMLElement>): void => {
    localStorage.removeItem("token");
    navigate("/");
  };
  publishArticle = (event: React.FormEvent) => {
    changeSettings(
      this.state.email,
      this.state.bio,
      this.state.URL,
      this.state.username,
      this.state.password
    );
    event.preventDefault();
    navigate("/");
  };

  render() {
    return (
      <Grid container spacing={8}>
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
              Your Settings
            </Typography>
            <form onSubmit={this.publishArticle}>
              <TextField
                placeholder="URL for Profile Picture"
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                onChange={this.changeURL}
                value={this.state.URL}
              />
              <TextField
                placeholder="user name"
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                onChange={this.changeUsername}
                value={this.state.username}
              />
              <TextField
                placeholder="short bio about you"
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                multiline
                onChange={this.changeBio}
                value={this.state.bio}
              />
              <TextField
                placeholder="email"
                fullWidth
                margin="normal"
                variant="filled"
                type="email"
                onChange={this.changeEmail}
                value={this.state.email}
              />
              <TextField
                placeholder="password"
                fullWidth
                margin="normal"
                variant="filled"
                type="password"
                onChange={this.changePassword}
                value={this.state.password}
              />
              <Button
                type="submit"
                variant="contained"
                size="medium"
                color="primary"
                style={{ marginLeft: "25%" }}
              >
                Change Settings
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                style={{ marginLeft: "5%" }}
                onClick={this.onLogout}
              >
                Log out
              </Button>
            </form>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
    );
  }
}

export default Settings;

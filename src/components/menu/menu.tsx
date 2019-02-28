import * as React from "react";
import { Component } from "react";
import "./style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";

type Props = {
  loggedIn: boolean;
  username?: string;
};

class Menu extends Component<Props> {
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className="grow">
              Conduit
            </Typography>

            {this.props.loggedIn ? (
              <div>
                <Button color="inherit" onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => navigate("new-article")}>
                  New Article
                </Button>
                <Button color="inherit" onClick={() => navigate("/")}>
                  Settings
                </Button>
                <Button color="inherit" onClick={() => navigate("/")}>
                  {this.props.username}
                </Button>
              </div>
            ) : (
              <div>
                <Button color="inherit" onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => navigate("/sign-in")}>
                  Sign in
                </Button>
                <Button color="inherit" onClick={() => navigate("sign-up")}>
                  Sign up
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Menu;

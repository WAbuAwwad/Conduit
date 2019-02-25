import * as React from "react";
import { Component } from "react";
import "./style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import { Router } from "@reach/router";

type Props = {
  loggedIn: boolean;
  userName?: string;
  changePath: (event: React.MouseEvent<HTMLElement>) => void;
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
                <Button color="inherit" onClick={this.props.changePath}>
                  Home
                </Button>

                <Button color="inherit" onClick={this.props.changePath}>
                  New Article
                </Button>

                <Button color="inherit" onClick={this.props.changePath}>
                  Settings
                </Button>

                <Button color="inherit" onClick={this.props.changePath}>
                  {this.props.userName}
                </Button>
              </div>
            ) : (
              <div>
                <Button color="inherit" onClick={this.props.changePath}>
                  Home
                </Button>

                <Button color="inherit" onClick={this.props.changePath}>
                  Sign in
                </Button>

                <Button color="inherit" onClick={this.props.changePath}>
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

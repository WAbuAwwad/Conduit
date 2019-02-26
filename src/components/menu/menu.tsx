import * as React from "react";
import { Component } from "react";
import "./style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

type Props = {
  loggedIn: boolean;
  userName?: string;
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
                <Button color="inherit">Home</Button>
                <Button color="inherit">New Article</Button>
                <Button color="inherit">Settings</Button>
                <Button color="inherit">{this.props.userName}</Button>
              </div>
            ) : (
              <div>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Sign in</Button>
                <Button color="inherit">Sign up</Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Menu;

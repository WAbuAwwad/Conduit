import * as React from "react";
import { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import "./style.css";
import { Link } from "@reach/router";
type Props = {
  loggedIn: boolean;
  userName?: string;
};

class Menu extends Component<Props> {
  state = {
    loggedIn: this.props.loggedIn
  };

  public loggedInMenu = (
    <div className="mycontainer">
      <span className="mybtn">
        <Link to="/"> Home</Link>
      </span>
      <span className="mybtn">
        <Link to="/new-article">New Article</Link>
      </span>
      <span className="mybtn">
        <Link to="/settings">Settings</Link>
      </span>{" "}
      <span className="mybtn">
        <Link to="/profile">{this.props.userName}</Link>
      </span>
    </div>
  );
  public loggedOutMenu = (
    <div className="mycontainer">
      <span className="mybtn">
        <Link to="/"> Home</Link>
      </span>
      <span className="mybtn">
        <Link to="/sign-in"> sign in</Link>
      </span>
      <span className="mybtn">
        <Link to="/sign-up"> sign up</Link>
      </span>
    </div>
  );
  public render() {
    if (this.state.loggedIn) {
      return (
        <Toolbar className="mytoolbar ">
          <Link to="/">
            <h1> Conduit</h1>
          </Link>
          {this.loggedInMenu}
        </Toolbar>
      );
    } else {
      return (
        <Toolbar className="mytoolbar ">
          <Link to="/">
            <h1> Conduit</h1>
          </Link>
          {this.loggedOutMenu}
        </Toolbar>
      );
    }
  }
}

export default Menu;

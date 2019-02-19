import React from "react";
import { storiesOf } from "@storybook/react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "../src/style.css";

storiesOf("menu", module)
  .add("menu with buttons - logged out", () => (
    <Toolbar className="mytoolbar ">
      <a href="#">
        <h1> Conduit</h1>
      </a>
      <div className="mycontainer">
        <Button className="mybtn">Home</Button>
        <Button className="mybtn">sign in</Button>
        <Button className="mybtn">sign up</Button>
      </div>
    </Toolbar>
  ))
  .add("menu with links - logged out", () => (
    <Toolbar className="mytoolbar ">
      <a href="#">
        <h1> Conduit</h1>
      </a>
      <div className="mycontainer">
        <span className="mybtn">
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#" className="mybtn">
            sign in
          </a>
        </span>
        <span>
          <a href="#" className="mybtn">
            sign up
          </a>
        </span>
      </div>
    </Toolbar>
  ))
  .add("menu with buttons - logged in", () => (
    <Toolbar className="mytoolbar ">
      <a href="#">
        <h1> Conduit</h1>
      </a>
      <div className="mycontainer">
        <Button className="mybtn">Home</Button>
        <Button className="mybtn">New Article</Button>
        <Button className="mybtn">Settings</Button>
        <Button className="mybtn">Profile</Button>
      </div>
    </Toolbar>
  ))
  .add("menu with links - logged in", () => (
    <Toolbar className="mytoolbar ">
      <a href="#">
        <h1> Conduit</h1>
      </a>
      <div className="mycontainer">
        <span className="mybtn">
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#" className="mybtn">
            New Article
          </a>
        </span>
        <span>
          <a href="#" className="mybtn">
            Settings
          </a>
        </span>{" "}
        <span>
          <a href="#" className="mybtn">
            Profile
          </a>
        </span>
      </div>
    </Toolbar>
  ));

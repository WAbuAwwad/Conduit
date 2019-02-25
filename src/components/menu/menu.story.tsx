import * as React from "react";
import { storiesOf } from "@storybook/react";
import Menu from "./menu";

function changePath() {}
storiesOf("menu", module)
  .add("menu - logged in", () => (
    <Menu loggedIn={true} changePath={changePath} />
  ))
  .add("menu - logged out", () => (
    <Menu loggedIn={false} changePath={changePath} />
  ));

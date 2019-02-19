import * as React from "react";
import { storiesOf } from "@storybook/react";
import Menu from "./menu";

storiesOf("menu", module)
  .add("menu - logged in", () => <Menu loggedIn={true} userName="Walaa" />)
  .add("menu - logged out", () => <Menu loggedIn={false} />);

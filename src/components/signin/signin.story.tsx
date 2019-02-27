import * as React from "react";
import { storiesOf } from "@storybook/react";
import SignIn from "../signin/signin";

function loggedIn(isLoggedIn) {}
storiesOf("sign in", module).add("sign in", () => (
  <SignIn onLogin={loggedIn} />
));

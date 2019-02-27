import * as React from "react";
import { storiesOf } from "@storybook/react";
import SignUp from "../signup/signup";

function loggedIn(isLoggedIn) {}
storiesOf("sign in", module).add("sign in", () => (
  <SignUp onLogin={loggedIn} />
));

import * as React from "react";
import { storiesOf } from "@storybook/react";
import Home from "./home";

storiesOf("Home", module).add("home", () => <Home path="/" />);

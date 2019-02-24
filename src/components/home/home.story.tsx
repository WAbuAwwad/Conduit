import * as React from "react";
import { storiesOf } from "@storybook/react";
import Home from "./home";

storiesOf("zft", module).add("home", () => <Home path="/" />);

import * as React from "react";
import { storiesOf } from "@storybook/react";
import Home from "./new Article";

storiesOf("New Article", module).add("new article", () => <Home path="/" />);

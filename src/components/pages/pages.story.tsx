import * as React from "react";
import { storiesOf } from "@storybook/react";
import Pages from "../pages/pages";
import "./style.css";

function change() {}
storiesOf("pagination ", module).add("pagination", () => (
  <Pages change={change} />
));

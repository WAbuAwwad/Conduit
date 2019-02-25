import * as React from "react";
import { storiesOf } from "@storybook/react";
import Tags from "./tags";
function clicked() {}
storiesOf("tags", module).add("tags", () => (
  <Tags tags={["hi", "walaa"]} handleTag={clicked} />
));

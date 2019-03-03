import * as React from "react";
import { storiesOf } from "@storybook/react";
import Article from "./article";

function handle() {}

storiesOf("articles", module).add("simple card", () => (
  <Article
    username="Walaa"
    date="19/4/1996"
    image="hh.png"
    title="my first Atricle"
    desc="this is the first one "
    fav={true}
    favCount={3}
    tags={[]}
    handleTag={handle}
    slug=""
  />
));

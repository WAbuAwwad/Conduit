import * as React from "react";
import { storiesOf } from "@storybook/react";
import ArticleForm from "../ArticleForm/ArticleFrom";
import "./style.css";

storiesOf("article Form", module).add("Article Form", () => <ArticleForm />);

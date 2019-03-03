import * as React from "react";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { RouteComponentProps } from "@reach/router";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";

const publish = (
  title: string,
  desc: string,
  content: string,
  tags: string[]
) => {
  let data = {
    article: { title: title, description: desc, body: content, tagList: tags }
  };
  fetch("https://conduit.productionready.io/api/articles", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Token " + localStorage.getItem("token")
    },
    credentials: "include"
  });
};

class NewArticle extends Component<RouteComponentProps> {
  state = {
    title: "",
    desc: "",
    content: "",
    tags: ""
  };

  changeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ title: event.target.value });
  };
  changeDesc = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ desc: event.target.value });
  };
  changeContent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ content: event.target.value });
  };
  changeTags = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ tags: event.target.value });
  };

  publishArticle = (event: React.FormEvent) => {
    let tags = this.state.tags.split(" ");
    publish(this.state.title, this.state.desc, this.state.content, tags);
    event.preventDefault();
    navigate("/");
  };

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} />
        <Grid container spacing={16}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <form onSubmit={this.publishArticle}>
              <TextField
                placeholder="Article title"
                fullWidth
                margin="normal"
                variant="filled"
                required
                type="text"
                onChange={this.changeTitle}
                value={this.state.title}
              />
              <TextField
                placeholder="What's the Article about ?"
                fullWidth
                margin="normal"
                variant="filled"
                required
                type="text"
                onChange={this.changeDesc}
                value={this.state.desc}
              />
              <TextField
                placeholder="write your article"
                fullWidth
                margin="normal"
                variant="filled"
                required
                type="text"
                multiline
                onChange={this.changeContent}
                value={this.state.content}
              />
              <TextField
                placeholder="Enter tags , separated by space"
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                onChange={this.changeTags}
                value={this.state.tags}
              />
              <Button
                type="submit"
                variant="contained"
                size="medium"
                color="primary"
                style={{ marginLeft: "35%" }}
              >
                Publish your Article
              </Button>
            </form>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
    );
  }
}

export default NewArticle;

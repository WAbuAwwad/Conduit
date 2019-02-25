import * as React from "react";
import { Component } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class ArticleForm extends Component {
  public render() {
    return (
      <form className="container">
        <TextField
          label="article Title"
          fullWidth
          margin="normal"
          variant="filled"
          required
        />
        <TextField
          label="What's this Article About"
          fullWidth
          margin="normal"
          variant="filled"
          required
        />
        <TextField
          label="write your Article "
          fullWidth
          value={"\n \n \n \n \n"}
          multiline
          margin="normal"
          variant="filled"
          rowsMax="20"
          className="txt"
          required
        />
        <TextField
          label="Enter tags "
          fullWidth
          margin="normal"
          variant="filled"
          required
        />

        <Button
          type="submit"
          variant="contained"
          size="medium"
          color="primary"
          className="btn"
        >
          Publish your Article
        </Button>
      </form>
    );
  }
}

export default ArticleForm;

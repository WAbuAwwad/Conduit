import * as React from "react";
import { Component } from "react";
import "./style.css";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

interface Props {
  tags: string[];
  handleTag: (tag: string) => void;
}

class Tags extends Component<Props> {
  render() {
    return (
      <div>
        <Typography gutterBottom component="h5" color="primary">
          Populer Tags
        </Typography>
        {this.props.tags.map((item: string, i: number) => (
          <Chip
            key={item}
            label={item}
            onClick={() => this.props.handleTag(item)}
            className="tag"
          />
        ))}
      </div>
    );
  }
}
export default Tags;

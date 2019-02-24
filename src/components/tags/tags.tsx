import * as React from "react";
import { Component } from "react";
import "./style.css";
import Chip from "@material-ui/core/Chip";

type Props = {
  tags: string[];
  clicked: (event: React.MouseEvent<HTMLElement>) => void;
};

class Tags extends Component<Props> {
  public render() {
    return (
      <div>
        {this.props.tags.map((item: string, i: number) => (
          <Chip
            key={i}
            label={item}
            onClick={this.props.clicked}
            className="tag"
          />
        ))}
      </div>
    );
  }
}
export default Tags;

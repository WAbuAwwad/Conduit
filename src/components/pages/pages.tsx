import * as React from "react";
import { Component } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";

type Props = {
  change: (event: React.MouseEvent<HTMLElement>) => void;
};
class Pages extends Component<Props> {
  public render() {
    var numbers = Array.from(Array(50).keys());
    return (
      <div>
        {numbers.map((item: any, i: number) => (
          <Button
            key={i}
            variant="outlined"
            color="primary"
            className="number"
            size="small"
            onClick={this.props.change}
          >
            {item + 1}
          </Button>
        ))}
      </div>
    );
  }
}

export default Pages;

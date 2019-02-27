import * as React from "react";
import { Component } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";

interface Props {
  onChangePage: (offset: number) => void;
}
class Pages extends Component<Props> {
  onClick = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target instanceof HTMLElement) {
      this.props.onChangePage(+event.target.innerText);
    }
  };

  render() {
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
            onClick={this.onClick}
          >
            {item + 1}
          </Button>
        ))}
      </div>
    );
  }
}

export default Pages;

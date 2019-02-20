import * as React from "react";
import { Component } from "react";
import Fab from "@material-ui/core/Fab";
import "./style.css";

type Props = {
  tag: string;
};
function Tag(props: Props) {
  return (
    <div className="tag">
      <Fab variant="extended" size="small">
        # {props.tag}
      </Fab>
    </div>
  );
}

class Tags extends Component {
  public state = {
    tags: []
  };

  public componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags") // Call the fetch function passing the url of the API as a parameter
      .then(res => res.json()) //response type
      .then(data => {
        this.setState({ tags: data.tags });
      })
      .catch(function() {
        console.log("Error in fetching tags");
      });
  }

  public render() {
    return (
      <div className="box">
        {this.state.tags.map((item: string, i: number) => (
          <Tag key={i} tag={item} />
        ))}
      </div>
    );
  }
}
export default Tags;

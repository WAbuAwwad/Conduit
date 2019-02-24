import * as React from "react";
import { Component } from "react";
import Article from "../articles/article";

type props = {
  url: string;
  handleTag: (event: React.MouseEvent<HTMLElement>) => void;
  data: string[];
};

class Articles extends Component<props> {
  public render() {
    return (
      <div>
        {this.props.data.map((item: any, i: number) => (
          <Article
            key={i}
            username={item.username}
            date={item.date}
            image={item.image}
            title={item.title}
            desc={item.desc}
            fav={item.fav}
            favCount={item.favCount}
            tags={item.tags}
            handleTag={this.props.handleTag}
          />
        ))}
      </div>
    );
  }
}

export default Articles;

import * as React from "react";
import { Component } from "react";
import Article from "../articles/article";

interface props {
  handleTag: (tag: string) => void;
  data: string[];
}

class Articles extends Component<props> {
  render() {
    return (
      <div>
        {this.props.data.map((item: any, i: number) => (
          <Article
            key={item.slug}
            username={item.username}
            date={item.date}
            image={item.image}
            title={item.title}
            desc={item.desc}
            fav={item.fav}
            favCount={item.favCount}
            tags={item.tags}
            handleTag={this.props.handleTag}
            slug={item.slug}
          />
        ))}
      </div>
    );
  }
}

export default Articles;

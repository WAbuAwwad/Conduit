import * as React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Articles from "../articles/articles";
import Tags from "../tags/tags";
import Pages from "../pages/pages";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { RouteComponentProps } from "@reach/router";

function fetchArticles(offset: number) {
  return fetch(
    "https://conduit.productionready.io/api/articles?limit=10&offset=" + offset
  )
    .then(res => res.json())
    .then(data => {
      return data.articles.map((item: any) => {
        return {
          username: item.author.username,
          date: item.createdAt,
          image: item.author.image,
          title: item.title,
          desc: item.description,
          favCount: item.favoritesCount,
          fav: item.favorited,
          tags: item.tagList,
          key: item.slug
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
}
function fetchTags() {
  return fetch("https://conduit.productionready.io/api/tags")
    .then(res => res.json())
    .then(data => {
      return data.tags;
    })
    .catch(function() {
      console.log("Error in fetching tags");
    });
}

function changeTag(tag: string) {
  return fetch(
    "https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=" +
      tag
  )
    .then(res => res.json())
    .then(data => {
      return data.articles.map((item: any) => {
        return {
          username: item.author.username,
          date: item.createdAt,
          image: item.author.image,
          title: item.title,
          desc: item.description,
          favCount: item.favoritesCount,
          fav: item.favorited,
          tags: item.tagList,
          key: item.slug
        };
      });
    })
    .catch(function() {
      console.log("Error in fetching data");
    });
}

class Home extends Component<RouteComponentProps> {
  state = {
    articles: [],
    tags: [],
    offset: 0
  };

  componentDidMount() {
    fetchTags().then(data => {
      this.setState({ tags: data });
    });

    fetchArticles(this.state.offset).then(data => {
      this.setState({ articles: data });
    });
  }

  componentDidUpdate() {
    fetchArticles(this.state.offset).then(data => {
      this.setState({ articles: data });
    });
  }

  changePage = (page: number): void => {
    this.setState({ page: page * 10 - 10 });
  };

  handleTag = (tag: string): void => {
    changeTag(tag).then(data => {
      this.setState({ articles: data });
    });
  };

  render() {
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Tabs value={0} indicatorColor="primary" textColor="primary">
              <Tab label="Global Feed" />
            </Tabs>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Articles data={this.state.articles} handleTag={this.handleTag} />
          </Grid>
          <Grid item xs={3}>
            <Tags tags={this.state.tags} handleTag={this.handleTag} />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Pages onChangePage={this.changePage} />
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default Home;

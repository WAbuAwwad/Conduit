import * as React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Articles from "../articles/articles";
import Tags from "../tags/tags";
import Pages from "../pages/pages";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { RouteComponentProps } from "@reach/router";
import { fetchTags } from "./API";
import { fetchArticles } from "./API";
import { changeTag } from "./API";

class Home extends Component<RouteComponentProps> {
  state = {
    articles: [],
    tags: [],
    page: 0
  };

  componentDidMount() {
    fetchTags().then(data => {
      this.setState({ tags: data });
    });
    fetchArticles(this.state.page).then(data => {
      this.setState({ articles: data });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.state.page !== prevProps.page) {
      fetchArticles(this.state.page).then(data => {
        this.setState({ articles: data });
      });
    }
  }

  changePage = (page: number): void => {
    this.setState({ page });
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

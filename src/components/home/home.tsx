import * as React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Articles from "../articles/articles";
import Tags from "../tags/tags";
import Pages from "../pages/pages";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { RouteComponentProps } from "@reach/router";
import { Consumer } from "../../context";

import {
  fetchTags,
  fetchArticles,
  changeTag,
  fetchFeedArticles
} from "../../API";

class Home extends Component<RouteComponentProps> {
  state = {
    tab: 0,
    articles: [],
    tags: [],
    page: 0,
    feedArticles: [],
    isLoading: true
  };

  componentDidMount() {
    const that = this;
    fetchTags().then(data => {
      this.setState({ tags: data });
    });
    fetchArticles(this.state.page)
      .then(data => {
        this.setState({ articles: data });
      })
      .finally(function() {
        that.setState({ isLoading: false });
      });

    fetchFeedArticles(this.state.page).then(data => {
      this.setState({ feedArticles: data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      fetchArticles(this.state.page).then(data => {
        this.setState({ articles: data });
      });
      fetchFeedArticles(this.state.page).then(data => {
        this.setState({ feedArticles: data });
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
  handleChangeTab = (event, value) => {
    this.setState({ tab: value });
  };
  render() {
    return this.state.isLoading ? (
      <div>
        <img
          src="./805.gif"
          alt="loading..."
          style={{ position: "absolute", top: "50%", left: "40%" }}
        />
      </div>
    ) : (
      <Grid container spacing={8}>
        <Grid item xs={12} />
        <Grid container spacing={8}>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Consumer>
              {context => (
                <Tabs
                  value={this.state.tab}
                  onChange={this.handleChangeTab}
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="Global Feed" />
                  {context.isLoggedIn ? <Tab label="Your Feed" /> : null}
                </Tabs>
              )}
            </Consumer>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={1} />
          <Grid item xs={8}>
            {this.state.tab ? (
              <Articles
                data={this.state.feedArticles}
                handleTag={this.handleTag}
              />
            ) : (
              <Articles data={this.state.articles} handleTag={this.handleTag} />
            )}
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
      </Grid>
    );
  }
}

export default Home;

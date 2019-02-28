import * as React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Articles from "../articles/articles";
import Tags from "../tags/tags";
import Pages from "../pages/pages";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { RouteComponentProps } from "@reach/router";
import Menu from "../menu/menu";
import {
  fetchTags,
  fetchArticles,
  changeTag,
  fetchFeedArticles,
  checkLoggedIn
} from "../../API";

class Home extends Component<RouteComponentProps> {
  state = {
    tab: 0,
    articles: [],
    tags: [],
    page: 0,
    feedArticles: [],
    isLoggedIn: false
  };

  componentDidMount() {
    fetchTags().then(data => {
      this.setState({ tags: data });
    });
    fetchArticles(this.state.page).then(data => {
      this.setState({ articles: data });
    });
    checkLoggedIn().then(data => {
      if (data == null) this.setState({ isLoggedIn: false });
      else {
        this.setState({ isLoggedIn: true });
        fetchFeedArticles(this.state.page).then(data => {
          this.setState({ feedArticles: data });
        });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
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
  handleChangeTab = (event, value) => {
    this.setState({ tab: value });
  };
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Menu />
        </Grid>
        <Grid item xs={12} />
        <Grid container spacing={8}>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Tabs
              value={this.state.tab}
              onChange={this.handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Global Feed" />
              {this.state.isLoggedIn ? <Tab label="Your Feed" /> : null}
            </Tabs>
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

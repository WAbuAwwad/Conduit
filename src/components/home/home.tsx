import * as React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Menu from "../menu/menu";
import Articles from "../articles/articles";
import Tags from "../tags/tags";
import Pages from "../pages/pages";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

type Props = {
  path: string;
};
class Home extends Component<Props> {
  public state = {
    url: "https://conduit.productionready.io/api/articles?limit=10&offset=0",
    data: [],
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
    fetch(this.state.url) // Call the fetch function passing the url of the API as a parameter
      .then(res => res.json()) //response type
      .then(data => {
        var temp = [{ username: "", date: "", image: "", title: "", desc: "" }];
        data.articles.map((item: any, i: number) => {
          var el = {
            username: item.author.username,
            date: item.createdAt,
            image: item.author.image,
            title: item.title,
            desc: item.description,
            favCount: item.favoritesCount,
            fav: item.favorited,
            tags: item.tagList
          };
          temp.push(el);
        });
        this.setState({ data: temp.slice(1) });
      })
      .catch(function() {
        console.log("Error in fetching tags");
      });
  }

  public componentDidUpdate() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        var temp = [{ username: "", date: "", image: "", title: "", desc: "" }];
        data.articles.map((item: any, i: number) => {
          var el = {
            username: item.author.username,
            date: item.createdAt,
            image: item.author.image,
            title: item.title,
            desc: item.description,
            favCount: item.favoritesCount,
            fav: item.favorited,
            tags: item.tagList
          };
          temp.push(el);
        });
        this.setState({ data: temp.slice(1) });
      })
      .catch(function() {
        console.log("Error in fetching tags");
      });
  }

  changePage = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target instanceof HTMLElement) {
      this.setState({
        url:
          "https://conduit.productionready.io/api/articles?limit=10&offset=" +
          (+event.target.innerHTML * 10 - 10)
      });
    }
  };

  handleTag = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target instanceof HTMLElement) {
      this.setState({
        url:
          "https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=" +
          event.target.innerText
      });
    }
  };

  render() {
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Menu loggedIn={false} />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Tabs value={0} indicatorColor="primary" textColor="primary">
              <Tab label="Global Feed" />
            </Tabs>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Articles
              data={this.state.data}
              url={this.state.url}
              handleTag={this.handleTag}
            />
          </Grid>
          <Grid item xs={3}>
            <Tags tags={this.state.tags} clicked={this.handleTag} />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Pages change={this.changePage} />
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import Home from "./components/home/home";
import { Router } from "@reach/router";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import NewArticle from "./components/new article/newArticle";
import Settings from "./components/settings/settings";
import { RouteComponentProps } from "@reach/router";
import ArticlePage from "./components/article/ArticlePage";
import { Provider } from "./context";
import { checkLoggedIn } from "./API";
import Menu from "./components/menu/menu";

class App extends Component<RouteComponentProps> {
  state = {
    isLoggedIn: false,
    username: ""
  };
  componentDidMount() {
    checkLoggedIn().then(data => {
      data == null
        ? this.setState({ isLoggedIn: false })
        : this.setState({ isLoggedIn: true, username: data.user.username });
    });
  }
  render() {
    return (
      <Provider value={this.state}>
        <Menu />
        <Router>
          <Home path="/" />
          <SignIn path="sign-in" />
          <SignUp path="sign-up" />
          <NewArticle path="new-article" />
          <Settings path="settings" />
          <ArticlePage path="article-page/:slug" />
        </Router>
      </Provider>
    );
  }
}

export default App;

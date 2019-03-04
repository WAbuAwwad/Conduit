import * as React from "react";
import { Component } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Card from "@material-ui/core/Card";
import AddIcon from "@material-ui/icons/Add";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import { fetchSingleArticel, fetchComments, postComment } from "../../API";
import Chip from "@material-ui/core/Chip";
import { compiler } from "markdown-to-jsx";
import { UserConsumer } from "../../context";

class ArticlePage extends Component<RouteComponentProps<{ slug: string }>> {
  state = {
    data: {
      username: "",
      image: "",
      date: "",
      favCount: "",
      fav: "",
      follow: "",
      title: "",
      desc: "",
      body: "",
      tags: []
    },
    comments: [],
    comment: ""
  };

  postComment = (event: React.FormEvent) => {
    postComment(this.props.slug, this.state.comment);
    event.preventDefault();
    this.setState({ comment: "" });
    navigate("/article-page/" + this.props.slug);
  };

  changeComment = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ comment: event.target.value });
  };
  componentDidMount() {
    fetchSingleArticel(this.props.slug).then(data => this.setState({ data }));
    fetchComments(this.props.slug).then(data =>
      this.setState({ comments: data })
    );
  }
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} />
        <Grid container spacing={16}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <CardHeader
              avatar={
                <Avatar
                  className="avatar"
                  src={this.state.data.image}
                  alt="name"
                />
              }
              action={
                <div>
                  <Fab
                    size="small"
                    color="default"
                    aria-label="Add"
                    variant="extended"
                    style={{ margin: "2px" }}
                  >
                    <AddIcon
                      color={this.state.data.follow ? "primary" : "action"}
                    />{" "}
                    Follow
                  </Fab>
                  <Fab
                    size="small"
                    color="default"
                    aria-label="Add"
                    variant="extended"
                    style={{ margin: "2px" }}
                  >
                    <FavoriteIcon
                      color={this.state.data.fav ? "primary" : "action"}
                    />
                    {this.state.data.favCount}
                  </Fab>
                </div>
              }
              title={this.state.data.username}
              subheader={this.state.data.date.split("T", 1)}
            />
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              color="primary"
            >
              {this.state.data.title}
            </Typography>
            <Typography color="textSecondary" variant="h6" component="h2">
              {this.state.data.desc}
            </Typography>
            <div style={{ height: "50%" }}>
              {compiler(this.state.data.body)}
            </div>
            {this.state.data.tags.map((item: string) => (
              <Chip key={item} label={item} />
            ))}
            {this.state.comments.map((item: any, i: number) => (
              <Card key={item.date} style={{ marginBottom: "3px" }}>
                <CardContent>
                  <Typography component="p">{item.body}</Typography>
                </CardContent>
                <CardActionArea>
                  <CardHeader
                    avatar={
                      <Avatar className="avatar" src={item.image} alt="name" />
                    }
                    title={item.username}
                    subheader={item.date.split("T", 1)}
                  />
                </CardActionArea>
              </Card>
            ))}
            <UserConsumer>
              {context =>
                !context.isLoggedIn ? (
                  <Typography gutterBottom color="primary" className="txt">
                    <Link to="/sign-in" style={{ margin: "2px" }}>
                      Sign in{" "}
                    </Link>
                    or
                    <Link to="/sign-up" style={{ margin: "2px" }}>
                      Sign up
                    </Link>
                    to post a comment
                  </Typography>
                ) : (
                  <form onSubmit={this.postComment}>
                    <TextField
                      placeholder="leave a comment"
                      margin="normal"
                      variant="outlined"
                      required
                      type="text"
                      multiline
                      style={{ width: "89%" }}
                      onChange={this.changeComment}
                      value={this.state.comment}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      color="primary"
                      style={{
                        width: "10%",
                        marginLeft: "2px",
                        marginTop: "20px"
                      }}
                    >
                      post
                    </Button>
                  </form>
                )
              }
            </UserConsumer>
          </Grid>

          <Grid item xs={2} />
        </Grid>
      </Grid>
    );
  }
}

export default ArticlePage;

import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import Chip from "@material-ui/core/Chip";
import "./style.css";

interface Props {
  username: string;
  date: string;
  image: string;
  title: string;
  desc: string;
  fav: boolean;
  favCount: number;
  tags: [];
  handleTag: (tag: string) => void;
}

function Article(props: Props) {
  function onClick(event: React.MouseEvent<HTMLElement>): void {
    if (event.target instanceof HTMLElement) {
      props.handleTag(event.target.innerText);
    }
  }

  return (
    <Card className="card">
      <CardHeader
        avatar={<Avatar className="avatar" src={props.image} alt="name" />}
        action={
          <IconButton>
            <Typography>{props.favCount}</Typography>
            <FavoriteIcon color={props.fav ? "primary" : "action"} />
          </IconButton>
        }
        title={props.username}
        subheader={props.date.split("T", 1)}
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">{props.desc}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
        {props.tags.map((item: string) => (
          <Chip key={item} label={item} onClick={onClick} />
        ))}
      </CardActions>
    </Card>
  );
}
export default Article;

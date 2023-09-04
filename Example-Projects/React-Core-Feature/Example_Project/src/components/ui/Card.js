import classes from "./Card.module.css";

function Card(props) {
  return <div classes={classes.card}>{props.children}</div>;
}

export default Card;

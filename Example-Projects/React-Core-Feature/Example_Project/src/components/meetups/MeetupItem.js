import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li classes={classes.item}>
      <Card>
        <div classes={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div classes={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div classes={classes.actions}>
          <button>Add to Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

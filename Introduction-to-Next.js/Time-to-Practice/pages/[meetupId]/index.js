import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCA53PPrWa1xnn18EV4TWzEenojLDGL7PHXQ&usqp=CAU"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is the frist meetup"
    />
  );
}

export default MeetupDetails;
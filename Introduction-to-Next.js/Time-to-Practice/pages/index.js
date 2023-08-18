import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "title1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCA53PPrWa1xnn18EV4TWzEenojLDGL7PHXQ&usqp=CAU",
    address: "Germany",
    description: "description1",
  },
  {
    id: "m2",
    title: "title2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCA53PPrWa1xnn18EV4TWzEenojLDGL7PHXQ&usqp=CAU",
    address: "Germany",
    description: "description2",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // Send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;

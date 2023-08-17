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
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;

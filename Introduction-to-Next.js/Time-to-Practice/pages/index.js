import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "title1",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCA53PPrWa1xnn18EV4TWzEenojLDGL7PHXQ&usqp=CAU",
//     address: "Germany",
//     description: "description1",
//   },
//   {
//     id: "m2",
//     title: "title2",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCA53PPrWa1xnn18EV4TWzEenojLDGL7PHXQ&usqp=CAU",
//     address: "Germany",
//     description: "description2",
//   },
// ];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://<username>:<password>@cluster0.ntrwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
}

export default HomePage;

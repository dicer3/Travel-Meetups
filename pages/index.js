import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "some address .. 1",
    description: "this is a first meetup !!",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "some address .. 2",
    description: "this is a second meetup !!",
  },
  {
    id: "m3",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "some address .. 3",
    description: "this is a third meetup !!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// this code will not be executed on client side
export const getStaticProps = async () => {
  // fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 3600,
  };
};

export default HomePage;

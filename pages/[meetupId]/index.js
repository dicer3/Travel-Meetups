import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image={
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      }
      title={"A First Meetup"}
      address={"PSome Street 5 , Some City"}
      description={"the meetup description"}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false, // path contain all keys for dymanic route else it would shoe for another route
    // if true next will regenrate page dynmically
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

// this code will not be executed on client side
export const getStaticProps = async (context) => {
  console.log("context ...", context.params);
  // fetch data from an api
  return {
    props: {
      meetups: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        title: "A First Meetup",
        address: "PSome Street 5 , Some City",
        description: "the meetup description",
        id: context.params.meetupId,
      },
    },
  };
};

export default MeetupDetails;

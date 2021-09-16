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

export default MeetupDetails;

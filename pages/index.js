import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUP = [
  {
    id: "m1",
    image:
      "https://media.istockphoto.com/photos/eiffel-tower-aerial-view-paris-picture-id1145422105?k=20&m=1145422105&s=612x612&w=0&h=IVTtz9ao9ywd5AltRNbr_K64LeuHeJ68J9ivjpztbEs=",
    title: "First Meet Up",
    address: "Add 1, street Lane D, PIN 232344",
  },
  {
    id: "m2",
    image:
      "https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg",
    title: "Second Meet Up",
    address: "Add 2, street Lane D, PIN 232344",
  },
];
function HomeComponent(props) {
  return <MeetupList meetups={DUMMY_MEETUP} />;
}
export default HomeComponent;

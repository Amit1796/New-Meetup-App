import MeetupList from "../Componets/layouts/meetups/MeetupList";
import { useState, useEffect } from "react";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is first meetup",
//     image:
//       "https://st3.depositphotos.com/10665628/18877/v/1600/depositphotos_188777370-stock-illustration-business-people-vector-groups-presentation.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is first, amazing meetup  which you can definitely should not miss",
//   },
//   {
//     id: "m2",
//     title: "This is first meetup",
//     image:
//       "https://st3.depositphotos.com/10665628/18877/v/1600/depositphotos_188777370-stock-illustration-business-people-vector-groups-presentation.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is first, amazing meetup  which you can definitely should not miss",
//   },
// ];

function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => { 
    setIsLoading(true)
    fetch('https://react-getting-started-51ac5-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup)
      }
      setIsLoading(false);
      setLoadedMeetups(meetups)
    });
  }, [])

 

  if(isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetUps;

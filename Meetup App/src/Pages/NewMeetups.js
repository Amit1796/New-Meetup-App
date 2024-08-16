import { useHistory } from "react-router-dom/cjs/react-router-dom";
import NewMeetupForm from "../Componets/layouts/meetups/NewMeetupForm";

function NewMeetups() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        fetch('https://react-getting-started-51ac5-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type' : 'application:json'
            }
        }
        ).then(() => {
            history.replace('/');
        })
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}


export default NewMeetups;
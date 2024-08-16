import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../../Ui/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputref = useRef();
  const addressInputref = useRef();
  const discriptionInputref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enterTitle = titleInputRef.current.value;
    const enterImage = imageInputref.current.value;
    const enterAddress = addressInputref.current.value;
    const enterDiscription = discriptionInputref.current.value;

    const meetupData = {
      title: enterTitle,
      image: enterImage,
      address: enterAddress,
      discription: enterDiscription,
    };

    props.onAddMeetup(meetupData);
    console.log(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputref} />
        </div>

        <div className={classes.control}>
          <label htmlFor="title">Address</label>
          <input type="text" required id="address" ref={addressInputref} />
        </div>

        <div className={classes.control}>
          <label htmlFor="discription">Meetup Title</label>
          <textarea
            id="discription"
            rows="5"
            ref={discriptionInputref}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

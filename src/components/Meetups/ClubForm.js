import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
function NewMeetupForm(){
const fullNameInputRef = useRef();
const emailInputRef = useRef();
const messageInputRef = useRef();

    function SubmitHandler(event){
        event.preventDefault();

        const enteredFullName = fullNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        const meetupData = {
            fullName : enteredFullName,
            email : enteredEmail,
            message : enteredMessage,
        };
        console.log(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='fullName'>Full Name</label>
                <input type='text' required id='fullName'ref={fullNameInputRef}  />
            </div>
            <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' required id='email' ref={emailInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Message</label>
                <textarea id='message' required rows='5' ref={messageInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Send</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;
import { useState } from "react";
import "./Conference.css";
import FormInput from "./Conference/FormInput";
import FormOutput from "./Conference/FormOutput";
import Axios from "axios";


const Conference = () => {
  const [values, setValues] = useState({
    meetingHeading: "",
    note: "",
    date: "",
    time: "",
    link: "",
  });



  const addInput = () => {
    Axios.post('http://localhost:3001/create',{
      meetingHeading: values.meetingHeading,
      note: values.note,
      date: values.date,
      time: values.time,
      link: values.link
    })
    .then(() => {
      console.log("success");
    });

  };

  const inputs = [
    {
      id: 1,
      name: "meetingHeading",
      type: "text",
      placeholder: "Meeting Heading",
      errorMessage:"Meeting Heading should not be empty",
      label: "Meeting Heading",
      required: true,
    },
    {
      id: 2,
      name: "note",
      type: "text",
      placeholder: "Note",
      label: "Note (optional)",
    },
    {
      id: 3,
      name: "date",
      type: "date",
      placeholder: "Date",
      label: "Date",
    },
    {
      id: 4,
      name: "time",
      type: "time",
      placeholder: "Time",
      label: "Time",
      required: true,
    },
    {
      id: 5,
      name: "link",
      type: "link",
      placeholder: "Link",
      errorMessage: "Meeting Link should not be empty!",
      label: "Link",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    addInput();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>New Meeting</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Add</button>
          </form>
      </div>
        <div className="dis">
            <FormOutput/>
      </div>
      </div>
  );
}

export default Conference;
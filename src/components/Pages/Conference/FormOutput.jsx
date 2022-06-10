import React, { useState } from 'react';
import axios from 'axios';
import "./FormOutput.css";


export default function FormOutput() {

    const [displayData, setDisplayData] = useState([]);

const display = () =>{
    axios.get('http://localhost:3001/display')
    .then((Response) =>{
       setDisplayData(Response.data);
         console.log(Response.data);
    });
}



return(
        <div><button onClick={display}>SHOW MEETINGS</button>
        {displayData.map((val, key) =>{
            return(
            <div className="formOutput">
                <h2>{val.meetingHeading}</h2>
                <h3>{val.note}</h3>
                <h3>Date:{val.date}      Time:{val.time}</h3>
                <h3><a href={val.link}>{val.link}</a></h3>
            </div>)

        })}
    </div>)
}

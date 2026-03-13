import { useState, useEffect } from "react";

export default function EventsRegistered(){

  const [events,setEvents] = useState([]);

  useEffect(()=>{

    const data =
      JSON.parse(localStorage.getItem("events")) || [];

    setEvents(data);

  },[]);

  return(

    <div>

      <h3>Registered Events</h3>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Event Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
          </tr>

        </thead>

        <tbody>

          {events.map((e,i)=>(
            <tr key={i}>
              <td>{e.eventName}</td>
              <td>{e.description}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.date}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );
}
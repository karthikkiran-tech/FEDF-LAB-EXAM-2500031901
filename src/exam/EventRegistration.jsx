import { useState } from "react";

export default function EventRegistration() {

  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    email: "",
    phone: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const events =
      JSON.parse(localStorage.getItem("events")) || [];

    events.push(formData);

    localStorage.setItem("events", JSON.stringify(events));

    alert("Event Registered Successfully");

    setFormData({
      eventName: "",
      description: "",
      email: "",
      phone: "",
      date: ""
    });
  };

  return (
    <div>

      <h3>Event Registration</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
        />

        <br/><br/>

        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br/><br/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br/><br/>

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <br/><br/>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <br/><br/>

        <button type="submit">Register Event</button>

      </form>

    </div>
  );
}
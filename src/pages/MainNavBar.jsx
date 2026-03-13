import { Link, Routes, Route } from "react-router-dom";

import Home from "../exam/Home";
import EventRegistration from "../exam/EventRegistration";
import EventsRegistered from "../exam/EventsRegistered";
import APIDemo from "../exam/APIDemo";
import PageNotFound from "../exam/PageNotFound";

export default function MainNavBar() {
  return (
    <div>

      <h2>Event Management System</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/registration">Registration</Link> |{" "}
        <Link to="/events">Events Registered</Link> |{" "}
        <Link to="/api">API Demo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<EventRegistration />} />
        <Route path="/events" element={<EventsRegistered />} />
        <Route path="/api" element={<APIDemo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}
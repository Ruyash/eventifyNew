// components/EventCard.js
import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.venue}</p>
      <Link to={`/event/detail/${event.id}`} className="btn btn-primary">
        Details
      </Link>
    </div>
  );
};

export default EventCard;

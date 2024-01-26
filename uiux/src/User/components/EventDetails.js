// components/EventDetails.js
import React from "react";
import { useSelector } from "react-redux";
import UserEvtList from "./UserEvtList";

const EventDetails = () => {
  return (
    <div className="event-detail-page">
      <h1>Event Details</h1>
      <UserEvtList />
    </div>
  );
};

export default EventDetails;

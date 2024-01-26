import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const redirectToEventList = () => {
    navigate("/event");
  };

  return (
    // <div className="container">
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h2 className="mb-0">Admin Dashboard</h2>
        </div>
        <div className="card-body">
          <p>Welcome, Admin! Manage college events with CRUD actions.</p>
          <div className="mb-3">
            <p>Perform the following actions:</p>
            <p>
              In our college event handling web application, the admin plays a
              pivotal role in managing and maintaining the events seamlessly.
              The admin has the privilege to perform CRUD (Create, Read, Update,
              Delete) operations on events, empowering them with full control
              over the event management system.
            </p>

            <p>
              Through an intuitive and user-friendly interface, the admin can
              effortlessly create new events, providing detailed information
              such as event name, date, time, venue, and description.
              Additionally, the admin can view a comprehensive list of all
              existing events, ensuring transparency and easy access to event
              details.
            </p>

            <p>
              To adapt to changing circumstances or correct any errors, the
              admin has the ability to update event information with just a few
              clicks. Furthermore, the admin can efficiently delete events that
              are no longer relevant or have been canceled, maintaining a
              well-organized and up-to-date event repository.
            </p>

            <p>
              This comprehensive set of CRUD functionalities empowers the admin
              to curate a dynamic and engaging calendar of events for the
              college community.
            </p>

            <button
              onClick={redirectToEventList}
              className="btn btn-primary mr-2"
            >
              View Events
            </button>
            <Link to="/event/create" className="btn btn-success mr-2">
              Create Event
            </Link>
          </div>
        </div>
      </div>

  );
};

export default AdminDashboard;

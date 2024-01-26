import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const UsrEvtDetail = () => {
  const { evtid } = useParams();
  const [evtdata, empdatachange] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/event/${evtid}`)
      .then((res) => res.json())
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [evtid]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-header bg-dark text-white">
              <h1 className="mb-0 text-center">User Event Details</h1>
            </div>
            <div className="card-body"></div>

            {evtdata && (
              <div className="p-4">
                <h2>
                  <b>Event Name :</b> <b>{evtdata.name}</b> ({evtdata.id})
                </h2>
                <br />
                <h5><b>Date & Time :</b> {evtdata.date}</h5>
                <h5><b>Price :</b> {evtdata.price}</h5>
                <h5><b>Venue :</b> {evtdata.venue}</h5>
                <h5><b>Description :</b> {evtdata.description}</h5>
                <Link className="btn btn-danger mt-3" to="/event-registration">
                  Pay & Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsrEvtDetail;

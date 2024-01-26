import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const UserEvtList = () => {
  const [evtdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/user/event/detail/" + id);
  };

  useEffect(() => {
    fetch("http://localhost:8080/event")
      .then((res) => res.json())
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h2 className="mb-0">User Event Listing</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>ID</th>
                <th>Event Name</th>
                <th>Date & Time</th>
                <th>Price (₹)</th>
                <th>Venue</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {evtdata &&
                evtdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.price}</td>
                    <td>{item.venue}</td>
                    <td>
                      <button
                        onClick={() => LoadDetail(item.id)}
                        className="btn btn-primary"
                      >
                        Pay & Register
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserEvtList;
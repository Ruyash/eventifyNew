import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const EvtList = () => {
  const [evtdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/event/detail/" + id);
  };

  const LoadEdit = (id) => {
    navigate("/event/edit/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8080/event/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
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
            <h2 className="mb-0">Event Listing</h2>
          </div>
          <div className="card-body table-responsive">
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
                          onClick={() => LoadEdit(item.id)}
                          className="btn btn-success mr-1"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => Removefunction(item.id)}
                          className="btn btn-danger mr-1"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => LoadDetail(item.id)}
                          className="btn btn-primary"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <Link to="/event/create" className="btn btn-success">
              Add Events
            </Link>
          </div>
        </div>
      </div>
    );
    
};

export default EvtList;

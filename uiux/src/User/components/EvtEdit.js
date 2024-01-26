import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const EvtEdit = () => {
  const { evtid } = useParams();

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [date, datechange] = useState("");
  const [price, pricechange] = useState("");
  const [venue, venuechange] = useState("");
  const [active, activechange] = useState(true);
  const [description, descriptionChange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/event/" + evtid)
      .then((res) => res.json())
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        datechange(resp.date);
        pricechange(resp.price);
        venuechange(resp.venue);
        activechange(resp.isactive);
        descriptionChange(resp.description);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [evtid]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const evtdata = { id, name, date, price, venue, active, description };

    fetch("http://localhost:8080/event/" + evtid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(evtdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/event");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left", fontWeight: "bold" }}>
              <div className="card-header bg-dark text-white">
                <h2 className="mb-0 text-center">Event Edit</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>ID</label>
                  <input
                    value={id}
                    disabled="disabled"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Event Name</label>
                  <input
                    required
                    value={name}
                    onMouseDown={(e) => valchange(true)}
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control"
                  />
                  {name.length === 0 && validation && (
                    <span className="text-danger">Change existing event here</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Date & Time</label>
                  <input
                    value={date}
                    onChange={(e) => datechange(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Event Price</label>
                  <input
                    value={price}
                    onChange={(e) => pricechange(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Venue</label>
                  <input
                    type="text"
                    value={venue}
                    onChange={(e) => venuechange(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <div className="form-check">
                    <input
                      checked={active}
                      onChange={(e) => activechange(e.target.checked)}
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Is Active</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    rows="4"
                    value={description}
                    onChange={(e) => descriptionChange(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="card-footer text-center">
                <button className="btn btn-success" type="submit">
                  Save
                </button>
                <Link to="/event" className="btn btn-danger ml-2">
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

  );
};

export default EvtEdit;

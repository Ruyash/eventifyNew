import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]); // State to store users
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:3001/signup")
      .then((res) => {
        setUsers(res.data); // Assuming res.data is an array of users
      })
      .catch((error) => {
        console.log("Unable to fetch users", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for minimum password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    axios
      .post("http://localhost:3001/signup", { email, username, password })
      .then(() => {
        alert("Registration Successful");
        setEmail("");
        setUsername("");
        setPassword("");
        setError("");
        fetchUsers(); // Fetch users after registration
        navigate("/login");
      })
      .catch((error) => {
        console.log("Unable to register user");
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <label>Username</label>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {password.length > 0 && password.length < 6 && (
            <p className="error-message">Password must be at least 6 characters</p>
          )}
          <br />
          <br />
          <button className="submit-button" type="submit">
            Sign Up
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;

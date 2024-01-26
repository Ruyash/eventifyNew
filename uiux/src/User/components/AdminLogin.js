// AdminLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (event) => {
    event.preventDefault();

    // Hardcoded admin credentials for simplicity
    const adminUsername = "admin";
    const adminPassword = "admin";

    if (username === adminUsername && password === adminPassword) {
      // Admin login success, navigate to admin dashboard
      navigate("/admin");
    } else {
      // Admin login failure
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form className="form" onSubmit={handleAdminLogin}>
          <label>Username</label>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          />
          <br />
          <br />
          <button className="submit-button" type="submit">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

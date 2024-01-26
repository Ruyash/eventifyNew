import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Check for minimum password length
      if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
      }

      await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      setUsername("");
      setPassword("");
      setError("");
      navigate("/");
    } catch (error) {
      console.error("Login Error", error.response || error);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form className="form" onSubmit={handleLogin}>
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
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;

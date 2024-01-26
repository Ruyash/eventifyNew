// App.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './User/components/HomePage';
import EventRegistration from './User/components/EventRegistration';
// import EventDetails from './User/components/EventDetails';
import Login from './User/components/Login';
import SignUp from './User/components/signup';
import About from './User/components/About';
import AdminLogin from './User/components/AdminLogin';
import AdminDashboard from './User/components/AdminDashboard';
import EvtList from "./User/components/EvtList";
import EvtCreate from "./User/components/EvtCreate";
import EvtDetail from "./User/components/EvtDetail";
import EvtEdit from "./User/components/EvtEdit";
import UsrEvtList from "./User/components/UsrEvtList";
import UsrEvtDetail from "./User/components/UsrEvtDetail";

// Import other components/routes as needed
function App() {

  return (
    <Router>
      <div className="App">
      <nav className="navbar">
      <a href="/"><img src="img/evtnav1.png" alt="Logo" className="nav-logo" /></a>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/event">Event Registration</Link>
          </li>
          {/* <li>
            <Link to="/event-registration">Event Registration</Link>
          </li> */}
          <li>
            <Link to="/">User Dashboard</Link>
          </li>
          <li>
            <Link to="/admin-login">Admin Login</Link>
          </li>
          <li>
            <Link to="/login">User Login</Link>
          </li>
          <li>
            <Link to="/signup">User SignUp</Link>
          </li>
        </ul>
      </nav>
      
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/event-registration" element={<EventRegistration />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/event" element={<EvtList />} />
          <Route path="/event/create" element={<EvtCreate />} />
          <Route path="/event/detail/:evtid" element={<EvtDetail />} />
          <Route path="/event/edit/:evtid" element={<EvtEdit />} />

          <Route path="/user/event" element={<UsrEvtList />} />
          <Route path="/user/event/detail/:evtid" element={<UsrEvtDetail />} />
        </Routes>
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About College Events</h4>
            <p>
              A platform dedicated to bringing the best events to our community, fostering
              connections and learning experiences for students and enthusiasts alike.
              Join us in celebrating knowledge and creativity!
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/events">Events</Link></li>
              {/* Add more relevant links */}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              {/* Add more social media links */}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>KONGU ENGINEERING COLLEGE</p>
            <p>Address: Thoppupalayam, Kumaran Nagar, Perundurai, Tamil Nadu 638060</p>
            <p>Email: kongu.info@events.com</p>
            <p>Phone: 04294-226515 / 04294-226517</p>
          </div>
        </div>
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
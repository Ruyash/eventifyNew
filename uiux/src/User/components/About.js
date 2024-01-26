import React from 'react';
import '../styles/About.css'; // Import your CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Welcome to Eventify</h1>
        <p>Your platform for enriching events!</p>
        <p className="description">
          We're dedicated to fostering connections, inspiring learning, and celebrating creativity within our community.
        </p>
        <p className="description">
          At Eventify, we curate diverse events that cater to various interests and disciplines. From academic symposiums to cultural festivals, our goal is to provide holistic experiences that nurture both minds and spirits.
        </p>
        <p className="description">
          Join us in exploring hands-on experiences, networking opportunities, and insightful discussions. Our events bridge the gap between theory and practice, offering a space for growth and inspiration.
        </p>
        <p className="description">
          Our team collaborates with industry experts and thought leaders to create unique events that entertain, educate, and inspire. Together, let's celebrate the joy of learning and the endless possibilities of knowledge.
        </p>
        <p className="thank-you">Thank you for being a part of Eventify. Let's embark on this exciting journey together!</p>
      </div>
    </div>
  );
};

export default About;
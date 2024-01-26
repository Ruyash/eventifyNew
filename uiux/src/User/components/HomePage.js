import React, { useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/HomePage.css"; // Import the CSS file for styling

const HomePage = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 8000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="carousel-container">
        <Carousel ref={carouselRef}>
          <Carousel.Item>
            <img className="carousel-image" src="img/deb.jpg" alt="Event 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Debugging</h3>
              <p>A coding contest where participants solve algorithmic problems, emphasizing debugging skills alongside coding efficiency.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src="img/hack.jpg" alt="Event 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Hackathon</h3>
              <p>A coding marathon where participants solve real-world problems within a limited time.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src="img/figma.png" alt="Event 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Event 1 Caption</h3>
              <p>Description for Event 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src="img/cyber.jpg" alt="Event 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Event 1 Caption</h3>
              <p>Description for Event 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src="img/tech.png" alt="Event 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Event 1 Caption</h3>
              <p>Celebrate diversity through music, dance, art, and food from different cultures.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src="img/start1.jpg" alt="Event 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Startup Pitch</h3>
              <p>Present innovative business ideas to a panel of judges for potential funding and mentorship.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src="img/tres.jpg" alt="Event 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Event 1 Caption</h3>
              <p>Description for Event 1</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;

// <img src='img/debug.jpg' alt="Event 1" />
// <img src="img/ppt1.jpg" alt="Event 2" />
// <img src="img/figma.png" alt="Event 3" />
// <img src="img/cyber.jpg" alt="Event 4" />
// <img src="img/startup.png" alt="Event 5" />
// <img src="img/tech.png" alt="Event 6" />
// <img src="img/treasure.jpg" alt="Event 6" />

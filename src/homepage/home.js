import "../App.css";
import { Carousel } from "react-bootstrap";
import "bootstrap";
import React, { useState } from "react";
import Displayer from "./displayer";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <h2>
        Spring & summer collections are here! It is time to restyle and stay à
        la mode.{" "}
      </h2>
      <Carousel activeIndex={index} onSelect={handleSelect} id="my-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3761552/pexels-photo-3761552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Beige leather bag</h3>
            <p>Go to work in a stylish way with this beige collection.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1117294/pexels-photo-1117294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>White patterned raffia handbag</h3>
            <p>Springtime deserves a stylish floral bag.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1103511/pexels-photo-1103511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Brown raffia handbag</h3>
            <p>This collection is essential for a day at a tropical beach.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1102225/pexels-photo-1102225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Brown raffia handbag</h3>
            <p>
              This collection is essential for a day at the beach during summer.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2>There are more designs to set the season on fire.</h2>
      <Carousel activeIndex={index} onSelect={handleSelect} id="my-carousel2">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Tan leather bag to bring out the style in you.</h3>
            <p>This handbag befits a special evening.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1100790/pexels-photo-1100790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>White patterned raffia handbag</h3>
            <p>Springtime deserves a stylish floral bag.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1117272/pexels-photo-1117272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Beige evening bag</h3>
            <p>This beautifully crafted bag is ideal for a summer evening..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1102210/pexels-photo-1102210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Snake skin pattern handbag</h3>
            <p>
              This collection essentially reveals the true summer vibe in you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Displayer />
    </>
  );
};

export default ControlledCarousel;

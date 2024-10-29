// Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import c1 from './assets/c1.jpeg'; // Ensure correct path
import c2 from './assets/c2.jpeg'; // Ensure correct path
import c3 from './assets/c3.jpeg'; // Ensure correct path

const Home = () => {
  const carouselItems = [
      { id: 1, text: 'Enjoy the best culinary delights.', img: c1 },
      { id: 2, text: 'A feast for your senses.', img: c2 },
      { id: 3, text: 'Experience flavors like never before.', img: c3 },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome to Our Food App</h2>

      {/* Carousel Component */}
      <Carousel className="mb-4">
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.img}
              alt={`Slide ${item.id}`}
            />
            <Carousel.Caption>
              <h3>Slide {item.id}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;

// cars.js
import React from 'react';
import './cars.css';

function Cars() {
  return (
    <div className="cars-container">
      <h1>Our Cars</h1>
      <div className="car-list">
        <div className="car">
          <img src="car1.jpg" alt="Car 1" />
          <h3>Car 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="car">
          <img src="car2.jpg" alt="Car 2" />
          <h3>Car 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="car">
          <img src="car3.jpg" alt="Car 3" />
          <h3>Car 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Cars;

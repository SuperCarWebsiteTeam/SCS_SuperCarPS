import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Discover the World of Supercars</h1>
            <p>Explore the most powerful and luxurious cars in the world.</p>
            <button>Get Started</button>
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <i className="fa fa-tachometer fa-3x"></i>
            <h3>Unmatched Performance</h3>
            <p>Experience the adrenaline rush of blistering acceleration and top speeds.</p>
          </div>
          <div className="feature">
            <i className="fa fa-car fa-3x"></i>
            <h3>Elegant Designs</h3>
            <p>Discover stunning designs that blend style and aerodynamics.</p>
          </div>
          <div className="feature">
            <i className="fa fa-dollar fa-3x"></i>
            <h3>Luxurious Comfort</h3>
            <p>Indulge in the ultimate comfort and craftsmanship that supercars offer.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;

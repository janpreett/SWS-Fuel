import React from 'react';
import './Home.css';
import truckImage from '../assets/truck.png';

const Home = () => {

  const handleButtonClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="home" id="home">
      <div className="home__content">
        <img src={truckImage} alt="Truck" className="home__truck-image" />
        <h2 className="home__subtitle">Fueling Your Success, Mile by Mile</h2>
        <h1 className="home__title">SWS Fuel</h1>
        <p className="home__description">
          At SWS Fuel Inc, we provide efficient logistics of fuel across New Jersey.
        </p>
        <div className="home__buttons">
          <a href="#services" className="home__button home__button--primary" onClick={handleButtonClick}>Learn More</a>
          <a href="#contact" className="home__button home__button--secondary" onClick={handleButtonClick}>Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Home;

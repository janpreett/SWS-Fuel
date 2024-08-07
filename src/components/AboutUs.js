import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const aboutUsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);
  
  return (
    <div className="about-us" id="about" ref={aboutUsRef}>
      <div className="about-us__content">
        <h1 className="about-us__title">About Us</h1>
        <p className="about-us__description">
          SWS Fuel Inc specializes in the efficient transport of fuel across New Jersey. With a fleet of top-of-the-line trucks and experienced drivers, we are committed to delivering your fuel promptly and reliably.
        </p>
        <p className="about-us__description">
          Our dedication to efficiency and customer satisfaction drives every aspect of our operations. Whether you need regular fuel deliveries or specialized transport solutions, trust SWS Fuel Inc to meet your needs with professionalism and expertise.
        </p>
      </div>
    </div>
  )
};
export default AboutUs;
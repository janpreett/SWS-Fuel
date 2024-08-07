// src/components/ContactUs.js

import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();
  const formRef = useRef();
  const infoRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail_sws', 'template_m6auof2', form.current, '48C-aCbyOLlgmCYu1')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
      });
    e.target.reset();
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('isVisible');
          observer.unobserve(entry.target); // Stop observing after the first intersection
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <section className="contact-us" id="contact">
      <h2 className="contact-us__header">Contact Us</h2>
      <div className="contact-us__container">
        <div ref={formRef} className="contact-us__form">
          <h2 className="contact-us__title">SEND US A MESSAGE</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-us__input-group">
              <input type="text" name="first_name" placeholder="First Name*" className="contact-us__input" required />
              <input type="text" name="last_name" placeholder="Last Name*" className="contact-us__input" required />
            </div>
            <div className="contact-us__input-group">
              <input type="email" name="email" placeholder="Email*" className="contact-us__input" required />
              <input type="tel" name="phone" placeholder="Phone*" className="contact-us__input" required />
            </div>
            <textarea name="message" placeholder="Message*" className="contact-us__textarea" required></textarea>
            <button type="submit" className="contact-us__button">SEND MESSAGE</button>
          </form>
        </div>
        <div ref={infoRef} className="contact-us__info">
          <h3 className="contact-us__info-title">Call Us</h3>
          <p className="contact-us__info-text"><a href="tel:+18565150344">Tel: (856) 515-0344</a></p> 
          <h3 className="contact-us__info-title">Send an E-mail</h3>
          <p className="contact-us__info-text"><a href="mailto:swsfuel@gmail.com">swsfuel@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import React from 'react';
import Button from '../ui/Button';
import Container from '../layout/Container';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Welcome to Your
              <span className="hero__title-gradient"> Creative Space</span>
            </h1>
            <p className="hero__description">
              A beautiful React playground showcasing modern component architecture,
              stunning designs, and best practices. Perfect for learning and experimentation!
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="large">
                Get Started
              </Button>
              <Button variant="outline" size="large">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__circle hero__circle--1"></div>
            <div className="hero__circle hero__circle--2"></div>
            <div className="hero__circle hero__circle--3"></div>
            <div className="hero__emoji">🚀</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

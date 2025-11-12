import React from 'react';
import Container from '../layout/Container';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: '🎯' },
    { number: '10K+', label: 'Lines of Code', icon: '💻' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '5+', label: 'Years Experience', icon: '🚀' }
  ];

  return (
    <section className="stats">
      <Container>
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <div className="stat__icon">{stat.icon}</div>
              <div className="stat__number">{stat.number}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;

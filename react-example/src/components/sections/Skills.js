import React, { useState } from 'react';
import Container from '../layout/Container';
import Card from '../ui/Card';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'CSS/SCSS', level: 80, icon: '🎨' },
      { name: 'HTML5', level: 90, icon: '📄' }
    ],
    backend: [
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Python', level: 70, icon: '🐍' },
      { name: 'REST APIs', level: 80, icon: '🔌' },
      { name: 'GraphQL', level: 65, icon: '📊' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: '🔀' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Webpack', level: 70, icon: '📦' },
      { name: 'Jest', level: 75, icon: '🧪' }
    ]
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <div className="skills__header">
          <h2 className="skills__title">Skills & Expertise</h2>
          <p className="skills__subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills__categories">
          <button
            className={`skills__category-btn ${activeCategory === 'frontend' ? 'skills__category-btn--active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend
          </button>
          <button
            className={`skills__category-btn ${activeCategory === 'backend' ? 'skills__category-btn--active' : ''}`}
            onClick={() => setActiveCategory('backend')}
          >
            Backend
          </button>
          <button
            className={`skills__category-btn ${activeCategory === 'tools' ? 'skills__category-btn--active' : ''}`}
            onClick={() => setActiveCategory('tools')}
          >
            Tools
          </button>
        </div>

        <div className="skills__content">
          <Card hoverable={false}>
            <div className="skills__list">
              {skillCategories[activeCategory].map((skill, index) => (
                <div key={index} className="skill">
                  <div className="skill__header">
                    <span className="skill__icon">{skill.icon}</span>
                    <span className="skill__name">{skill.name}</span>
                    <span className="skill__level">{skill.level}%</span>
                  </div>
                  <div className="skill__bar">
                    <div
                      className="skill__bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Skills;

import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Container from '../layout/Container';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: '🎨',
      title: 'Design System',
      description: 'A comprehensive design system built with React components, featuring reusable UI elements and consistent styling.',
      tags: ['React', 'CSS', 'Components'],
      status: 'completed'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Dashboard',
      description: 'Responsive dashboard with real-time data visualization and interactive charts for tracking metrics.',
      tags: ['React', 'Charts', 'Mobile'],
      status: 'in-progress'
    },
    {
      id: 3,
      icon: '🛍️',
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with cart management, checkout flow, and payment integration.',
      tags: ['React', 'Redux', 'API'],
      status: 'completed'
    },
    {
      id: 4,
      icon: '🎮',
      title: 'Interactive Game',
      description: 'Browser-based game built with React showcasing state management and animations.',
      tags: ['React', 'Hooks', 'Animation'],
      status: 'in-progress'
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <div className="projects__header">
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            Explore some of the exciting projects built with React
          </p>
        </div>

        <div className="projects__grid">
          {projects.map(project => (
            <Card
              key={project.id}
              icon={project.icon}
              title={project.title}
            >
              <p className="projects__description">{project.description}</p>
              <div className="projects__tags">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="primary" size="small">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="projects__footer">
                <Badge
                  variant={project.status === 'completed' ? 'success' : 'info'}
                  size="small"
                >
                  {project.status === 'completed' ? '✓ Completed' : '⚡ In Progress'}
                </Badge>
                <Button variant="outline" size="small">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

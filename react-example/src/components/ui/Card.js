import React from 'react';
import './Card.css';

const Card = ({
  children,
  title,
  subtitle,
  icon,
  hoverable = true,
  className = ''
}) => {
  const classNames = [
    'card',
    hoverable ? 'card--hoverable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {(icon || title || subtitle) && (
        <div className="card__header">
          {icon && <div className="card__icon">{icon}</div>}
          <div className="card__header-text">
            {title && <h3 className="card__title">{title}</h3>}
            {subtitle && <p className="card__subtitle">{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import './Badge.css';

const Badge = ({
  children,
  variant = 'default',
  size = 'medium'
}) => {
  const classNames = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`
  ].join(' ');

  return (
    <span className={classNames}>
      {children}
    </span>
  );
};

export default Badge;

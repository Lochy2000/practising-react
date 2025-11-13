import React from 'react';
import './Container.css';

const Container = ({ children, maxWidth = 'large', className = '' }) => {
  const classNames = [
    'container',
    `container--${maxWidth}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Container;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnimatedButton.css';

export default function AnimatedButton({ children }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <button
      className="animated-btn"
      onMouseMove={handleMouseMove}
      style={{
        '--x': `${pos.x}%`,
        '--y': `${pos.y}%`,
      }}
    >
      {children}
    </button>
  );
}

AnimatedButton.propTypes = {
  children: PropTypes.string.isRequired,
  // size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
};

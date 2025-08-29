import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnimatedCard.css';

export default function AnimatedCard({ children }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      className="animated-card"
      onMouseMove={handleMouseMove}
      style={{
        '--x': `${pos.x}%`,
        '--y': `${pos.y}%`,
        width: 300,
        height: 200,
      }}
    >
      {children}
    </div>
  );
}

AnimatedCard.propTypes = {
  children: PropTypes.string.isRequired,
};

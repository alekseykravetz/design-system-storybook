import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnimatedButton3.css';

export default function AnimatedButton3({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  rounded = false,
  disabled = false,
  onClick,
  ...props
}) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const handleClick = (e) => {
    if (disabled) return;

    // ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    // call original onClick
    if (onClick) onClick(e);
  };

  return (
    <button
      className={[
        'animated-btn',
        variant,
        size,
        fullWidth ? 'full-width' : '',
        rounded ? 'rounded' : '',
        disabled ? 'disabled' : '',
      ].join(' ')}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      style={{
        '--x': `${pos.x}%`,
        '--y': `${pos.y}%`,
      }}
      disabled={disabled}
      {...props}
    >
      {children}
      <span className="ripple-container">
        {ripples.map((r) => (
          <span key={r.id} className="ripple" style={{ left: r.x, top: r.y }} />
        ))}
      </span>
    </button>
  );
}

AnimatedButton3.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
};

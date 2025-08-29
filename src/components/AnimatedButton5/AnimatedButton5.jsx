import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnimatedButton5.css';

export default function AnimatedButton5({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  rounded = false,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  onClick,
  ...props
}) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState([]);

  const isDisabled = disabled || loading;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const handleClick = (e) => {
    if (isDisabled) return;

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
        isDisabled ? 'disabled' : '',
        loading ? 'loading' : '',
      ].join(' ')}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      style={{
        '--x': `${pos.x}%`,
        '--y': `${pos.y}%`,
      }}
      disabled={isDisabled}
      {...props}
    >
      <span className="btn-content">
        {loading ? (
          <span className="spinner" />
        ) : (
          <>
            {iconLeft && <span className="btn-icon left">{iconLeft}</span>}
            <span className="btn-text">{children}</span>
            {iconRight && <span className="btn-icon right">{iconRight}</span>}
          </>
        )}
      </span>

      <span className="ripple-container">
        {ripples.map((r) => (
          <span key={r.id} className="ripple" style={{ left: r.x, top: r.y }} />
        ))}
      </span>
    </button>
  );
}

AnimatedButton5.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
};

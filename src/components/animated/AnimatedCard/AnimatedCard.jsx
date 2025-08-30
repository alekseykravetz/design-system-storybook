import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import './AnimatedCard.css';
import useRipple from '../clickRippleEffect/useRipple';
import Ripple from '../clickRippleEffect/Ripple';
import useMousePosition from '../hooks/useMousePosition';
import Spinner from '../Spinner/Spinner';

export default function AnimatedCard({ children }) {
  const { ripples, startRipple } = useRipple();
  const { pos, detectMousePosition } = useMousePosition();

  return (
    <div
      className="animated-card"
      onMouseMove={detectMousePosition}
      style={{
        '--x': `${pos.x}%`,
        '--y': `${pos.y}%`,
        width: 300,
        height: 200,
      }}
      onClick={startRipple}
    >
      {children}
      <Spinner />
      <Ripple ripples={ripples} />
    </div>
  );
}

AnimatedCard.propTypes = {
  children: PropTypes.string.isRequired,
};

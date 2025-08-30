import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import './ripple.css';

export default function Ripple({ ripples }) {
  return (
    <span className="ripple-container">
      {ripples.map((r) => (
        <span key={r.id} className="ripple" style={{ left: r.x, top: r.y }} />
      ))}
    </span>
  );
}

Ripple.propTypes = {
  ripples: PropTypes.array.isRequired,
};

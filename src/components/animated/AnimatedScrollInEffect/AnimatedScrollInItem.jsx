import React from 'react';
import PropTypes from 'prop-types';
import './AnimatedScrollInItem.css';

export default function AnimatedScrollInItem(props) {
  return <div className="animated-scroll-in-item" {...props}></div>;
}

AnimatedScrollInItem.propTypes = {
  children: PropTypes.string.isRequired,
};

import React, { useState } from 'react';
import '../styles.css';
import './ripple.css';

export default function useRipple() {
  const [ripples, setRipples] = useState([]);

  const startRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };
  return {
    ripples,
    startRipple,
  };
}

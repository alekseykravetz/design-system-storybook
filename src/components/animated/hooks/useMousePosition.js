import React, { useState } from 'react';

export default function useMousePosition() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const detectMousePosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return {
    pos,
    detectMousePosition,
  };
}

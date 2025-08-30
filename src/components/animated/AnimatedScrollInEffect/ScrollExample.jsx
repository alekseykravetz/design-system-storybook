import React from 'react';
import AnimatedScrollInItem from './AnimatedScrollInItem';

const getRandomWidth = () => {
  return `${Math.random() * 250 + 250}px`;
};

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function ScrollExample() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
      }}
    >
      {[...Array(60)].map((_, index) => (
        <AnimatedScrollInItem
          key={index}
          style={{
            height: '150px',
            width: getRandomWidth(),
            backgroundColor: getRandomColor(),
          }}
        ></AnimatedScrollInItem>
      ))}
    </div>
  );
}

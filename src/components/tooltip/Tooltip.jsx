import React from "react";
import "./tooltip.css";

export default function Tooltip({ children, tooltip }) {
  // By using a wrapper div, the Tooltip can accept any number of children,
  // including components that don't forward their props. This is more robust.
  return (
    <div className="tooltip-container" data-tooltip={tooltip}>
      {children}
    </div>
  );
}

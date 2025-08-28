import React, {
  useState,
  useRef,
  cloneElement,
  Fragment,
  useLayoutEffect,
} from 'react';
import { createPortal } from 'react-dom';
import './tooltip.css';

export default function Tooltip({ children, tooltip }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const childRef = useRef(null);
  const tooltipRef = useRef(null);

  const showTooltip = () => {
    if (!childRef.current) return;
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  useLayoutEffect(() => {
    if (visible && childRef.current && tooltipRef.current) {
      const childRect = childRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const top = childRect.top - tooltipRect.height - 5 + window.scrollY;
      let left =
        childRect.left +
        childRect.width / 2 -
        tooltipRect.width / 2 +
        window.scrollX;

      if (left < 0) left = 5;
      if (top < 0) top = childRect.bottom + 5 + window.scrollY;

      setPosition({ top, left });
    }
  }, [visible]);

  const child = React.Children.only(children);

  const trigger = cloneElement(child, {
    ref: (node) => {
      childRef.current = node;
      const { ref } = child;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    },
    onMouseEnter: (e) => {
      showTooltip();
      child.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e) => {
      hideTooltip();
      child.props.onMouseLeave?.(e);
    },
  });

  return (
    <Fragment>
      {trigger}
      {visible &&
        createPortal(
          <div
            className="tooltip"
            ref={tooltipRef}
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            {tooltip}
          </div>,
          document.body
        )}
    </Fragment>
  );
}

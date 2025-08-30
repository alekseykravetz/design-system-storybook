import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import './AnimatedButton.css';
import useRipple from '../clickRippleEffect/useRipple';
import Ripple from '../clickRippleEffect/Ripple';
import useMousePosition from '../hooks/useMousePosition';
import Spinner from '../Spinner/Spinner';
import Spinner2 from '../Spinner2/Spinner2';

export default function AnimatedButton({
  children,
  variant,
  size = 'md',
  fullWidth = false,
  rounded = false,
  disabled = false,
  loading: loadingProp = false,
  autoLoading = false,
  iconLeft,
  iconRight,
  onClick,
  ...props
}) {
  const { pos, detectMousePosition } = useMousePosition();
  const { ripples, startRipple } = useRipple();
  const [internalLoading, setInternalLoading] = useState(false);

  const loading = autoLoading ? internalLoading : loadingProp;
  const isDisabled = disabled || loading;

  const handleClick = async (e) => {
    if (isDisabled) return;

    startRipple(e);

    if (onClick) {
      try {
        const result = onClick(e);

        if (autoLoading && result instanceof Promise) {
          setInternalLoading(true);
          await result.finally(() => setInternalLoading(false));
        }
      } catch (err) {
        if (autoLoading) setInternalLoading(false);
        throw err;
      }
    }
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
      onMouseMove={detectMousePosition}
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
          <Spinner />
        ) : (
          <>
            {iconLeft && <span className="btn-icon left">{iconLeft}</span>}
            <span className="btn-text">{children}</span>
            {iconRight && <span className="btn-icon right">{iconRight}</span>}
          </>
        )}
      </span>

      <Ripple ripples={ripples} />
    </button>
  );
}

AnimatedButton.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
};

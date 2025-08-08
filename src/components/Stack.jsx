import PropTypes from 'prop-types';

export default function Stack({
  children,
  spacing = 2,
  direction = 'row',
  wrap = false,
}) {
  const style = {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap: `${spacing * 0.25}rem`,
  };
  return <div style={style}>{children}</div>;
}

Stack.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column']),
  wrap: PropTypes.bool,
};

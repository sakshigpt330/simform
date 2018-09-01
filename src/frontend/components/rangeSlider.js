import PropTypes from 'prop-types';
import React from 'react';

const RANGE = (props) => {
  const {
    min, max, value, className, id, onChange,
  } = props;
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      className={className}
      id={id}
      onChange={
        onChange ? e => onChange(e.target.value) : () => console.log('input changed')
      }
    />
  );
};

RANGE.propTypes = {
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};

export default RANGE;

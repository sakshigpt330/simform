import PropTypes from 'prop-types';
import React from 'react';

const INPUT = (props) => {
  const {
    type, className, placeholder, value, id, onChange, name,
  } = props;
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={
        onChange ? e => onChange(e.target.value) : () => console.log('input changed')
      }
    />
  );
};

INPUT.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default INPUT;

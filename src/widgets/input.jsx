import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type, name, autoComplete, value, required, className, placeholder, handleChange, multiple}) =>(
  <label htmlFor={name}>
    <input 
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      name={name}
      id={name}
      value={value}
      multiple={multiple}
      autoComplete={autoComplete}
      required={required || false}
    />
  </label>
)

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Input;

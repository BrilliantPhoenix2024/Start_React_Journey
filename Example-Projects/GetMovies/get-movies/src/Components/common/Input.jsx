// Input.js
import React from 'react';

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

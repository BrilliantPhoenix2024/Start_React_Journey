import React from "react";
import Joi from "joi-browser";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false }; // Return all errors
    const { error } = this.schema.validate(this.state.data, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // Set errors if any
    if (errors) return; // If there are errors, exit

    this.doSubmit(); // Call doSubmit if no errors
  };

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          value={data[name]}
          onChange={this.handleChange}
          id={name}
          name={name}
          type={type}
          className="form-control"
        />
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </div>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          id={name}
          name={name}
          value={data[name]}
          onChange={this.handleChange}
          className="form-control"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </div>
    );
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;

const Input = ({ label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-control" {...rest} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

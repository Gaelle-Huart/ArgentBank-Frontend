const Input = ({
  id,
  label,
  type,
  checked,
  onChange,
  value,
  autoComplete,
  placeholder,
  readOnly,
  disabled,
}) => {

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        checked={type === 'checkbox' ? checked : undefined}
        value={type !== 'checkbox' ? value : undefined}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
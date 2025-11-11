const Input = ({
  id,
  label,
  type,
  checked,
  onChange,
  value,
  autoComplete,
  placeholder,
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
      />
    </div>
  );
};

export default Input;
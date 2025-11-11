const Checkbox = ({
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
    <div className="input-remember">
      <input
        type={type}
        id={id}
        checked={type === 'checkbox' ? checked : undefined}
        value={type !== 'checkbox' ? value : undefined}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
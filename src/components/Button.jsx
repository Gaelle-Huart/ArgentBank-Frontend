const Button = ({ type, className, value, children }) => {
  return (
    <button type={type} className={`${className}`} value={value}>
      {children}
    </button>
  )
}

export default Button;
const Button = ({ type, onClick, children, className }) => {
  return (
    <Button type={type} className={`${className}`} onClick={onClick}>
      {children}
    </Button>
  )
}

export default Button;
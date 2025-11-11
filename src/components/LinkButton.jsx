const LinkButton = ({ type, onClick, children, className, href }) => {
  return (
    <a role='button' href={href} type={type} className={`${className}`} onClick={onClick}>
      {children}
    </a>
  )
}

export default LinkButton;
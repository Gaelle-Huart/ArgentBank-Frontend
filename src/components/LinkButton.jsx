const LinkButton = ({ href, type, className, onClick, children }) => {
  return (
    <a role='button' href={href} type={type} className={`${className}`} onClick={onClick}>
      {children}
    </a>
  )
}

export default LinkButton;
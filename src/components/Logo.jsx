import logo from '../assets/argentBankLogo.webp';

import '../style/components/logo.css';

function Logo({src=logo, alt='Argent Bank Logo'}) {
  return (
    <img
      className='logoImg'
      src={src}
      alt={alt}
    />
  )
}

export default Logo;
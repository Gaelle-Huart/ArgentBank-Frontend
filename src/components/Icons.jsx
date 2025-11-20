import { FaUserCircle } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { FaArrowDown } from 'react-icons/fa6';
import { FaFrownOpen } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

import '../style/components/icons.css';

const Icons = ({ size='default', type='user', className, onClick }) => {

  const iconComponents = {
    user: FaUserCircle,
    signout: FaPowerOff,
    settings: FaGear,
    cross: FaTimes,
    pencil: FaPencilAlt,  
    arrowDown: FaArrowDown,
    oups: FaFrownOpen,
  }
  const IconComponent = iconComponents[type]
  
  const iconSize = size === 'large' ? 26 : 16
  const iconClass = size === 'large' ? 'iconLarge' : 'iconDefault'

  return <IconComponent size={iconSize} className={`${iconClass} ${className}`} onClick={onClick} />
}

export default Icons;
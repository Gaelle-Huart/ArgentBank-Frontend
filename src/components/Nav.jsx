import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icons';

import '../style/components/nav.css';


function Nav() {

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <Logo />
        <h1 className="sr-only">ArgentBank</h1>
      </Link>
      <div className="main-nav-icons">
        
          <>
            <span className="main-nav-username">userName</span>
            
            <span className="main-nav-item">Sign out</span>
          </>
        
          <NavLink className="main-nav-item" to="/signin">
            <Icon size="default" type="user" />
            <span>Sign In</span>
          </NavLink>
        
      </div>
    </nav>
  );
}

export default Nav;
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
            
            <span className="main-nav-item"
              style={{ cursor: 'pointer' }}
            >
              Sign out
            </span>
          </>
        
          <NavLink className="main-nav-item" to="/login">
            <Icon size="default" type="user" />
            <span>Login</span>
          </NavLink>
        
      </div>
    </nav>
  );
}

export default Nav;
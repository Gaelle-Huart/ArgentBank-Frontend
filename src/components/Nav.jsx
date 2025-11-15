import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authSlice';
import Logo from './Logo';
import Icon from './Icons';

import '../style/components/nav.css';


function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.auth.profile);
  
  const dispatchLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <Logo />
        <h1 className="sr-only">ArgentBank</h1>
      </Link>
      <div className="main-nav-icons">
        {token && profile && profile.userName ? (
          <>
            <span className="main-nav-username">{profile.userName}</span>
            <Icon size="default" type="user" />
            <Icon size="default" type="settings" />
            <span className="main-nav-item" onClick={dispatchLogout}>
              Sign out
            </span>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/signin">
            <Icon size="default" type="user" />
            <span>Sign In</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Nav;
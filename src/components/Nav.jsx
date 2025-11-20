import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authSlice';
import Logo from './Logo';
import Icon from './Icons';


function Nav() {
  // récupération des données Redux dans le state (toujours vérifier le chemin)
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.user.profile);
  // mise en place des hooks React et Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const redirect = () => {
    navigate('/user');
  }

  const dispatchLogout = () => {
    dispatch(logout());
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <Link className='main-nav-logo' to='/'>
        <Logo />
        <h1 className="sr-only">ArgentBank</h1>
      </Link>
      <div className="main-nav">
        {token && profile ? (
          <>
            <span className='main-nav-user'>{profile.userName}</span>
            <div className='main-nav-icons'>
              <Icon size='large' type='user' onClick={redirect} />
              <Icon size='large' type='settings' />
              <Icon size='large' type='signout' onClick={dispatchLogout} />
            </div>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/signin">
            <Icon size='default' type='user' />
            <span>Sign In</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Nav;
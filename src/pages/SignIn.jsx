import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icons';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import LinkButton from '../components/LinkButton';


const SignIn = () => {
  const navigate = useNavigate();
  const [setEmail] = useState('');
  const [setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const token = localStorage.getItem('autorisationToken') || sessionStorage.getItem('autorisationToken');


  useEffect(() => {
    if (token) {
      navigate('/user');
    }
  }, [token, navigate]);

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <Icon size='default' type='user' />
        <h1>Sign In</h1>
        <form>
          <Input
            id='username'
            name='username'
            label='Username'
            type='email'
            autoComplete='username'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id='password'
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox
            id='rememberMe'
            name='rememberMe'
            label='Remember me'
            type='checkbox'
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <LinkButton type='submit' className='sign-in-button' >
            Sign In
          </LinkButton>
        </form>
      </section>
    </main>
  )
}

export default SignIn;
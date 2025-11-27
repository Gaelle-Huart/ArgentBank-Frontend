import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/reducers/authSlice';

import Icon from '../components/Icons';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ userData, setUserData ] = useState({ email: "", password: "", rememberMe: false })
  const { error, token } = useSelector((state) => state.auth)
  
  const dispatchSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData))
  }

  useEffect(() => {
    if (token && token.length > 10) {
      navigate('/user')
    }
  }, [token, navigate])

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <Icon size='large' type='user' />
        <h1>Sign In</h1>
        <form onSubmit={dispatchSubmit}>
          <Input
            id='email'
            name='email'
            label='Email'
            type='email'
            autoComplete={'email'}
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />
          <Input
            id='password'
            name='password'
            label='Password'
            type='password'
            autoComplete={'password'}
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            required
          />
          <Checkbox
            id='rememberMe'
            name='rememberMe'
            label='Remember me'
            type='checkbox'
            checked={userData.rememberMe}
            onChange={(e) => setUserData({ ...userData, rememberMe: e.target.checked })}
          />
          <Button type='submit' className='sign-in-button' onClick={() => onclick}>
            Sign In
          </Button>
          {error && (
            <div className='error'>
              {error.message || error.toString()}
            </div>
          )}
        </form>
      </section>
    </main>
  )
}

export default SignIn;
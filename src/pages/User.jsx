import { useState, useEffect } from 'react';
import { updateUserProfile, getUserProfile } from '../redux/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import { validUserName } from '../tools/Regex';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';


function User() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
 
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile())
    };
  }, [token, dispatch]);

  const profile = useSelector((state) => state.user.profile)

  useEffect(() => {
    if (profile) {
      setUserName(profile.userName)
    }
  }, [profile, setUserName])
  
  if (!token) return <div>Please log in</div>
  if (!profile) return <div>Profile not found</div>

  const usernameSubmit = async (e) => {
    e.preventDefault()
    if (!validUserName(userName)) {
      alert("Nom invalide (autorisé: lettres, ' et -)");
      return;
    } else {
      await dispatch(updateUserProfile({ userName }))
      setEditing(false)
    }
  }

  return (
    <main className='main bg-dark'>
      {editing && (
        <div className='edit-form'>
          <h2 className='title'>Edit user info</h2>
          <form onSubmit={usernameSubmit}>
            <div className='edit-form-content'>
              <Input
                label='User name:'
                type='text'
                id='username'
                value={userName}
                onChange={e => setUserName(e.target.value)}
                autoComplete={profile.userName}
                placeholder={profile.userName}
              />
              <Input
                label='First name:'
                type='text'
                id='firsname'
                value={profile.firstName}
                autoComplete={profile.firstName}
                placeholder={profile.firstName}
                readOnly
                disabled
              />
              <Input
                label='Last name:'
                type='text'
                id='lastname'
                value={profile.lastName}
                autoComplete={profile.lastName}
                placeholder={profile.lastName}
                readOnly
                disabled
              />
            </div>
            <Button type='submit' className='save-edit'>Save</Button>
            <Button type='button' className='cancel-edit' onClick={() => setEditing(false)}>Cancel</Button>
          </form>
        </div>
      )}
    
      {!editing && (
        <div className='welcome'>
          <h1 className='title'>
            Welcome back<br />
            {profile.firstName} {profile.lastName} !
          </h1>
          <Button className='edit-button' onClick={() => setEditing(true)}>Edit Name</Button>
        </div>
      )}
    
      <h2 className='sr-only'>Accounts</h2>
      <Card
        title='Argent Bank Checking (x8349)'
        amount='2,082.79'
        description='Available Balance'
      />
      <Card
        title='Argent Bank Savings (x6712)'
        amount='10,928.42'
        description='Available Balance'
      />
      <Card
        title='Argent Bank Credit Card (x8349)'
        amount='184.30'
        description='Current Balance'
      />
    </main>
  )
}

export default User;
import { useState, useEffect } from 'react';
import { updateUserProfile, getUserProfile } from '../redux/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';


function User() {
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const profile = useSelector((state) => state.user.profile)

  const [firstName] = useState("")
  const [lastName] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile())
    };
  }, [token, dispatch])

  // useEffect(() => {
  //   if (profile) {
  //     setUserName(profile.userName ?? '')
  //     setFirstName(profile.firstName ?? '')
  //     setLastName(profile.lastName ?? '')
  //   }
  // }, [profile])
  // console.log('useEffect profile:', profile.userName, profile.firstName, profile.lastName)

  if (!token) return <div>Please log in</div>
  if (!profile) return <div>Profile not found</div>

  const usernameSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updateUserProfile({ userName, firstName, lastName }))
    setEditing(false)
  }

  return (
    <main className='main bg-dark'>
      {editing && (
        <div className='edit-form'>
          <h2 className='title'>Edit user info</h2>
          <form onSubmit={usernameSubmit}>
            <div>
              <label htmlFor='userName'>User name:</label>
              <Input
                type='text'
                defaultValue={profile.userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='firstName'>First name:</label>
              <Input
                type='text'
                defaultValue={profile.firstName}
                readOnly
                disabled
              />
            </div>
            <div>
              <label htmlFor='lastName'>Last name:</label>
              <Input
                type='text'
                defaultValue={profile.lastName}
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
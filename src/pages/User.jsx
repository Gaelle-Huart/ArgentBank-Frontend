import { useState, useEffect } from 'react';
import { updateUserProfile, getUserProfile } from '../redux/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';


function User() {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  const token = useSelector(state => state.auth.token)
  const loading = useSelector(state => state.user.loading)
  const profile = useSelector(state => state.user.profile)
  const error = useSelector(state => state.user.error)
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    if (profile) {
      setUserName(profile.userName ?? '')
      setFirstName(profile.firstName ?? '')
      setLastName(profile.lastName ?? '')
    }
  }, [profile])

  //rajout de token au troisième if, enlever si problème ; enlever if(!loading) pour voir ce que ça donne
  useEffect(() => {
    if (!token) return
    if (!loading) return
    if (token && !profile) {
      dispatch(getUserProfile())
    }
  }, [dispatch, token, profile, loading])

  if (!token) return <div>Please log in</div>
  if (loading) return <div>Loading profile...</div>
  if (!profile) return <div>Profile not found</div>
  if (error) return <div>Error: {error.toString()}</div>

  const onSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updateUserProfile({ userName, firstName, lastName }))
    setIsEditing(false)
  }

  return (
    <main className='main bg-dark'>
      {isEditing && (
        <div className='edit-form'>
          <h2 className='title'>Edit user info</h2>
          <form onSubmit={onSubmit}>
            <div>
              <label>User name:</label>
              <Input
                type='text'
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label>First name:</label>
              <Input
                type='text'
                value={firstName}
                readOnly
                disabled
              />
            </div>
            <div>
              <label>Last name:</label>
              <Input
                type='text'
                value={lastName}
                readOnly
                disabled
              />
            </div>
            <Button type='submit' className='save-edit'>Save</Button>
            <Button type='button' className='cancel-edit' onClick={() => setIsEditing(false)}>Cancel</Button>
          </form>
        </div>
      )}
    
      {!isEditing && (
        <div className='header'>
          <h1 className='title'>
            Welcome back<br />
            {firstName} {lastName} !
          </h1>
          <Button className='edit-button' onClick={() => setIsEditing(true)}>Edit Name</Button>
        </div>
      )}
    
      <h2 className='sr-only'>Accounts</h2>
      <section className='account'>
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
      </section>
    </main>
  )
}

export default User;
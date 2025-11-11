import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';


function User() {
  const [firstName] = useState('')
  const [lastName] = useState('')

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1 className='title'>
          Welcome back<br />
          {firstName} {lastName} !
        </h1>
        <Button className='edit-button'>Edit Name</Button>
      </div>
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
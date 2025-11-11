import LinkButton from '../components/LinkButton';
import Icon from '../components/Icons';

function Error() {
  return (
    <main className='main bg-dark'>
      <section className='not-found'>
        <h2>404</h2>
        <Icon size='large' type='oups' />
        <p>Oups, la page est introuvable.</p>
        <LinkButton href='/' className='sign-in-button'>
          Home
        </LinkButton>
      </section>
    </main>
  )
}

export default Error;
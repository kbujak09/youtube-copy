import info from '../../assets/info.svg';
import SignIn from './SignIn';

const LoggedOut = () => {
  return (
    <div className="loggedOut">
      <div className='loggedOutInfo'><img src={info}  alt='info'/></div>
      <SignIn/>
    </div>
  )
}

export default LoggedOut;
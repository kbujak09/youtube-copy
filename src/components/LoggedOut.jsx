import icon from '../assets/loggedOutIcon.svg';

const LoggedOut = () => {
  return (
    <div className="loggedOut">
      <div className='loggedOutIconDiv'><img className='loggedOutIcon' alt='icon' src={icon}/></div>
      <div className="loggedOutText">Sign in</div>
    </div>
  )
}

export default LoggedOut;
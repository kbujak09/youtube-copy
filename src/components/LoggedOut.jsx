import icon from '../assets/loggedOutIcon.svg';
import info from '../assets/info.svg';

const LoggedOut = () => {
  return (
    <div className="loggedOut">
      <div className='loggedOutInfo'><img src={info}  alt='info'/></div>
      <div className="loggedOutDiv">
        <div className='loggedOutIconDiv'><img className='loggedOutIcon' alt='icon' src={icon}/></div>
        <div className="loggedOutText">Sign in</div>
      </div>
    </div>
  )
}

export default LoggedOut;
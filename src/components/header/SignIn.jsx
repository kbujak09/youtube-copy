import icon from '../../assets/loggedOutIcon.svg';

const SignIn = () => {
  return (
    <div className="loggedOutDiv">
        <div className='loggedOutIconDiv'><img className='loggedOutIcon' alt='icon' src={icon}/></div>
        <div className="loggedOutText">Sign in</div>
    </div>
  )
}

export default SignIn;
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div className='logo'>
      <div className='navButton'></div>
      <img className='logoImage' src={logo} alt='logo'/>
    </div>
  )
}

export default Logo;
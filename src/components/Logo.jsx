import logo from '../assets/logo.png';
import menuButton from '../assets/menuButton.svg';

const Logo = () => {
  return (
    <div className='logo'>
      <div className='menuButtonDiv'><img className='menuButton' src={menuButton} alt='navButton'/></div>
      <div className='logoImageDiv'><img className='logoImage' src={logo} alt='logo'/></div>
    </div>
  )
}

export default Logo;
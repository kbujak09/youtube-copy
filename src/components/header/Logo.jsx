import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Logo = () => {

  const navigate = useNavigate();

  return (
    <div className='logo'>
      <div className='menuButtonDiv'><i className='material-symbols-outlined menu'>menu</i></div>
      <div className='logoImageDiv' onClick={() => navigate('/')}><img className='logoImage' src={logo} alt='logo'/></div>
    </div>
  )
}

export default Logo;
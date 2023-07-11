import Logo from './Logo';
import SearchBar from './SearchBar';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';  

const Header = ({logged}) => {
  return (
    <div id='header'>
      <Logo />
      <SearchBar />
      { logged ? <LoggedIn/> : <LoggedOut/> }
    </div>
  )
}

export default Header;
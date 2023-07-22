import Logo from './header/Logo';
import SearchBar from './header/SearchBar';
import LoggedOut from './header/LoggedOut';  

const Header = ({setSearchResult}) => {
  return (
    <div id='header'>
      <Logo />
      <SearchBar setSearchResult={setSearchResult}/>
      <LoggedOut/> 
    </div>
  )
}

export default Header;
import Logo from './Logo';
import SearchBar from './SearchBar';
import LoggedOut from './LoggedOut';  

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
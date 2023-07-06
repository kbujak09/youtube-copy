import button from '../assets/searchButton.svg';
import microphone from '../assets/searchMicrophone.svg';

const SearchBar = () => {
  return (
    <div className="search">
      <div className="searchBar">
        <input className="searchBarInput" placeholder="Search" type="text"/>
        <div className="searchBarButton">
          <img className='searchButton' alt='searchButton' src={button}/>
        </div>
      </div>
      <div className="searchVoice">
        <img src={microphone} className='voice' alt='microphone'/>
      </div>
    </div>
  )
}



export default SearchBar;
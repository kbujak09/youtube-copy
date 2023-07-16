import button from '../assets/searchButton.svg';
import microphone from '../assets/searchMicrophone.svg';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const search = () => {
    navigate(`'/results${value}'`);
  }

  return (
    <div className="search">
      <form onSubmit={search} className="searchBar">
        <input value={value} onChange={handleChange} className="searchBarInput" placeholder="Search" type="text"/>
        <button className="searchBarButton">
          <img className='searchButton' alt='searchButton' src={button}/>
        </button>
      </form>
      <div className="searchVoice">
        <img src={microphone} className='voice' alt='microphone'/>
      </div>
    </div>
  )
}



export default SearchBar;
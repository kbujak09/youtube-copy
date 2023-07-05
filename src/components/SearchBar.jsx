const SearchBar = () => {
  return (
    <div className="search">
      <div className="searchBar">
        <div className="searchBarDiv">
          <div className="searchIcon"></div>
          <input className="searchBarInput" placeholder="Search" type="text" />
        </div>
        <div className="searchBarButton"></div>
      </div>
      <div className="searchVoice"></div>
    </div>
  )
}

export default SearchBar;
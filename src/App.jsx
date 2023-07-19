import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import SearchPage from './components/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {

  const [searchResult, setSearchResult] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <Header setSearchResult={setSearchResult}/>
        <div id="content">
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/results/:id' element={<SearchPage searchResult={searchResult}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import SearchPage from './components/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {

  const [searchResult, setSearchResult] = useState('');
  const [avatars, setAvatars] = useState();
  const [dataSource, setDataSource] = useState();
  const [data, setData] = useState();

  const fetchData = async () => {
    const fetched = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=${process.env.REACT_APP_API_KEY}`)).json();
    const avatarsId = [];
    for (let data of fetched.items) {
      avatarsId.push(`id=${data.snippet.channelId}&`); 
    }
    const avatars = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&${avatarsId.join('')}key=${process.env.REACT_APP_API_KEY}`)).json()
    setAvatars(avatars.items);
    setData(fetched.items.concat(fetched.items));
    setDataSource(fetched.items);
  }

  useEffect(() => {
    fetchData();
    console.log('pablo')
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header setSearchResult={setSearchResult}/>
        <div id="content">
          <Nav/>
          <Routes>
            <Route path='/' element={<Home data={data} dataSource={dataSource} avatars={avatars} setData={setData}/>}/>
            <Route path='/results/:id' element={<SearchPage searchResult={searchResult}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Header from './components/Header';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import SearchPage from './components/SearchPage';
import VideoPage from './components/VideoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {

  const [searchResult, setSearchResult] = useState('');
  const [avatars, setAvatars] = useState();
  const [dataSource, setDataSource] = useState();
  const [data, setData] = useState();
  const [videoId, setVideoId] = useState();

  const fetchData = async () => {
    const fetched = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=US&key=${process.env.REACT_APP_API_KEY}`)).json();
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
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header setSearchResult={setSearchResult}/>
        <div id="content">
          <Routes>
            <Route path='/' element={<Nav/>}/>
            <Route path='/results/:id' element={<Nav/>}/>
          </Routes>
          <Routes>
            <Route path='/' element={<HomePage data={data} setVideoId={setVideoId} dataSource={dataSource} avatars={avatars} setData={setData}/>}/>
            <Route path='/results/:id' element={<SearchPage setVideoId={setVideoId} searchResult={searchResult}/>}/>
            <Route path='/watch/:id' element={<VideoPage setVideoId={setVideoId} videoId={videoId}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
